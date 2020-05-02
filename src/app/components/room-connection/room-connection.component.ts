import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { WebRTCConnectionService } from '../../services/webrtc-client-connection.service';
import { WebRTCClientService } from '../../services/webrtc-clients.service';
import { WebRTCClient } from '../../models/webrtc-client.model';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-room-connection',
  templateUrl: './room-connection.component.html',
  styleUrls: ['./room-connection.component.sass']
})
export class RoomConnectionComponent implements OnInit {

  public userName: string = '';
  public roomId?: string = undefined;
  public usersConnected: WebRTCClient[];
  public isConnected: boolean;
  public currentURL: string;
  public roomWasFull: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private webRTCConnectionService: WebRTCConnectionService,
              private webRTCClientService: WebRTCClientService,
              private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.roomId) {
        this.webRTCClientService.setRoomId(params.roomId, false);
      } else {
        this.webRTCClientService.setRoomId(undefined, false);
      }
    });

    this.webRTCClientService.getRoomId.subscribe((roomId) => {
      this.roomId = roomId;
    });

    this.webRTCClientService.getRoomWasFull.subscribe((roomWasFull) => {
      this.roomWasFull = roomWasFull;
    });

    this.webRTCClientService.getClients.subscribe((userList) => {
      this.usersConnected = userList.toArray();
    }, (e) => {
      console.error('Error updating user list:', e);
    });

    this.isConnected = false;
    this.currentURL = location.origin + '/room-connection/';
  }

  copyLink() {
    const tempTxtBox = document.createElement('textarea');
    tempTxtBox.style.position = 'fixed';
    tempTxtBox.style.left = '0';
    tempTxtBox.style.top = '0';
    tempTxtBox.style.opacity = '0';
    tempTxtBox.value = this.currentURL + this.roomId;
    document.body.appendChild(tempTxtBox);
    tempTxtBox.focus();
    tempTxtBox.select();
    document.execCommand('copy');
    document.body.removeChild(tempTxtBox);
  }

  connect() {
    this.webRTCConnectionService.connect(this.userName, this.roomId);
    this.isConnected = true;
  }

  disconnect() {
    this.webRTCConnectionService.disconnect();
    this.isConnected = false;
    this.webRTCClientService.setRoomId(undefined, false);
    location.reload();
  }

  setStreamSrc(user: WebRTCClient): string {
    const video = document.getElementById(user.id);
    (video as HTMLMediaElement).srcObject = user.stream;

    return user.id;
  }

}
