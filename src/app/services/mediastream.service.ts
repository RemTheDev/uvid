import { Injectable } from '@angular/core';

@Injectable()
export class MediaStreamService {
  private mediaStream: MediaStream = undefined;

  public getMediaStream(): Promise<MediaStream> {
    if (!this.mediaStream) {
      return navigator.mediaDevices.getUserMedia({
        audio: true, video: true
      }).then ((stream: MediaStream) => {
        return Promise.resolve(stream);
      }).catch((e: MediaStreamError) => {
        console.error('Could not get media stream: ', e);
        return Promise.reject(e);
      });
    } else {
      return Promise.resolve(this.mediaStream);
    }
  }
}
