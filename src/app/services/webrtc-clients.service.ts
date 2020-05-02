import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { WebRTCClient } from '../models/webrtc-client.model';

@Injectable()
export class WebRTCClientService {
  private clients: BehaviorSubject<List<WebRTCClient>> = new BehaviorSubject(List([]));
  private roomId: BehaviorSubject<string> = new BehaviorSubject(undefined);
  private roomWasFull: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}

  public get getClients(): Observable<List<WebRTCClient>> {
    return this.clients.asObservable();
  }

  public addClient(newClient: WebRTCClient): void {
    this.clients.next(this.clients.getValue().push(newClient));
  }

  public removeClient(clientId: string): void {
    const clientList = this.clients.getValue();
    const removeIndex = clientList.findIndex(c => c.id === clientId);
    this.clients.next(clientList.remove(removeIndex));
  }

  public get getRoomId(): Observable<string> {
    return this.roomId.asObservable();
  }

  public get getRoomWasFull(): Observable<boolean> {
    return this.roomWasFull.asObservable();
  }

  public setRoomId(roomId: string, roomWasFull: boolean) {
    this.roomId.next(roomId);
    this.roomWasFull.next(roomWasFull);
  }

  public getUserName(clientId: string): string {
    const clientList = this.clients.getValue();
    return clientList.find(c => c.id === clientId).userName;
  }
}
