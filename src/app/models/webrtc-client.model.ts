export class WebRTCClient {
  id?: string;
  userName: string;
  stream: MediaStream;

  constructor(id: string, userName: string, stream: MediaStream)
  {
    this.id = id;
    this.userName = userName;
    this.stream = stream;
  }
}
