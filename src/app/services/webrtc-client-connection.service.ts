import { Injectable, ComponentFactoryResolver } from '@angular/core';
import * as socketIO from 'socket.io-client';
import { WebRTCClientService } from './webrtc-clients.service';
import { MediaStreamService } from './mediastream.service';
import { WebRTCClient } from '../models/webrtc-client.model';
import { environment } from '../../environments/environment';
import { RTC_INIT,
         RTC_DISCONNECT,
         RTC_USER_CONNECTED,
         RTC_CONNECTED_TO_ROOM,
         RTC_ROOM_IS_FULL,
         RTC_MESSAGE,
         RTC_MESSAGE_TYPE_ICE,
         RTC_MESSAGE_TYPE_OFFER,
         RTC_MESSAGE_TYPE_ANSWER,
         RTC_USER_DISCONNECTED} from '../webrtc/webrtc-event-messages';

@Injectable()
export class WebRTCConnectionService {
  private socket: SocketIOClient.Socket;
  private userConnections: RTCPeerConnection[] = [];
  private mediaStream: MediaStream = undefined;
  private userId: string;

constructor(private webRTCClientsService: WebRTCClientService,
            private mediaStreamService: MediaStreamService) {
  this.socket = socketIO.connect(environment.ServiceLink);
  this.socket.on('connect', () => {
    this.userId = this.socket.id;
    console.log('Socket', this.socket.id, 'connected.');
  });

  this.socket.on('disconnect', () => {
    console.log('Socket', this.socket.id, 'disconnected.');
  });

  this.socket.on(RTC_USER_CONNECTED, (data) => {
    this.makeOffer(data.userId, data.username);
  });

  this.socket.on(RTC_USER_DISCONNECTED, (data) => {
    this.userDisconnected(data.userId);
  });

  this.socket.on(RTC_CONNECTED_TO_ROOM, (data) => {
    this.webRTCClientsService.setRoomId(data.roomId, false);
  });

  this.socket.on(RTC_ROOM_IS_FULL, (data) => {
    this.webRTCClientsService.setRoomId(data.roomId, true);
  });

  this.socket.on(RTC_MESSAGE, (data) => {
    this.handleRTCMessage(data);
  });
}

public connect(userName: string, room?: string, ) {
  this.mediaStreamService.getMediaStream().then((stream: MediaStream) => {
    this.mediaStream = stream;
    const currentUser = new WebRTCClient(this.socket.id, userName, this.mediaStream);
    this.webRTCClientsService.addClient(currentUser);
    if (!room) {
      this.socket.emit(RTC_INIT, { userId: currentUser.id });
    } else {
      console.log(room);
      this.socket.emit(RTC_INIT, { userId: currentUser.id, room: room, username: userName });
    }
  }).catch(e => {
    console.error('Couln\'t get mediaStream', e);
  });
}

public disconnect() {
  this.socket.emit(RTC_DISCONNECT, { userId: this.userId });
  this.mediaStream.getTracks().forEach((track) => {
    track.stop();
  });

  this.webRTCClientsService.removeClient(this.socket.id);
}

private makeOffer(userId: string, userName: string) {
  const userConnection = this.getUserConnection(userId, userName);
  const options = {
    mandatory: {
      offerToReceiveVideo: true,
      offerToReceiveAudio: true
    }
  };

  userConnection.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: true }).then((session: RTCSessionDescriptionInit) => {
    return userConnection.setLocalDescription(session).then(() => {
      this.socket.emit(RTC_MESSAGE, {
        from: this.userId,
        dest: userId,
        session: session,
        type: RTC_MESSAGE_TYPE_OFFER,
        username: this.webRTCClientsService.getUserName(this.userId)
      });
    });
  });
}

private getUserConnection(userId, userName): RTCPeerConnection {
  if (this.userConnections[userId]) {
    return this.userConnections[userId];
  }

  const userConnection = new RTCPeerConnection();
  this.userConnections[userId] = userConnection;
  userConnection.onicecandidate = (event: RTCPeerConnectionIceEvent) => {
    this.socket.emit(RTC_MESSAGE, {
      from: this.userId,
      dest: userId,
      ice: event.candidate,
      type: RTC_MESSAGE_TYPE_ICE
    });
  };

  userConnection.onnegotiationneeded = () => {
    console.log('Need nogociation:', userId);
  };

  userConnection.onsignalingstatechange = () => {
    console.log('Client', userId, ' ICE signal changed to', userConnection.signalingState);
  };

  this.mediaStream.getTracks().forEach(track => {
    userConnection.addTrack(track, this.mediaStream);
  });
  userConnection.ontrack = (event: RTCTrackEvent) => {
    // Work around so this code only fires once even if the event is triggered twice (audio and video)
    if (event.track.kind === 'video') {
      console.log('Received new stream');
      const user = new WebRTCClient(userId, userName, event.streams[0]);
      this.webRTCClientsService.addClient(user);
    }
  };

  return userConnection;
}

private handleRTCMessage(message) {
  const userConnection = this.getUserConnection(message.from, message.username);

  switch (message.type) {
    case RTC_MESSAGE_TYPE_ICE:
      if (message.ice) {
        console.log('Adding ice candidate');
        userConnection.addIceCandidate(message.ice);
      }
      break;
    case RTC_MESSAGE_TYPE_OFFER:
      userConnection.setRemoteDescription(new RTCSessionDescription(message.session)).then(() => {
        console.log('Setting remote session');
        return userConnection.createAnswer().then((session: RTCSessionDescription) => {
          return userConnection.setLocalDescription(session).then(() => {
            this.socket.emit(RTC_MESSAGE, {
              from: this.userId,
              dest: message.from,
              session: session,
              type: RTC_MESSAGE_TYPE_ANSWER,
              username: this.webRTCClientsService.getUserName(this.userId)
            });
          });
        });
      }).catch(e => {
        console.error('Error on SDP-Offer:', e);
      });
      break;
    case RTC_MESSAGE_TYPE_ANSWER:
      userConnection.setRemoteDescription(new RTCSessionDescription(message.session)).then(() => {
        console.log('Setting remote session');
      }).catch(e => console.error('Error on answer:', e));
      break;
  }
}

private userDisconnected(userId) {
  this.webRTCClientsService.removeClient(userId);
}

}
