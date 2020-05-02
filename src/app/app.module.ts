import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomConnectionComponent } from './components/room-connection/room-connection.component';
import { WebRTCConnectionService } from './services/webrtc-client-connection.service';
import { WebRTCClientService } from './services/webrtc-clients.service';
import { MediaStreamService } from './services/mediastream.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
require('webrtc-adapter');

@NgModule({
  declarations: [
    AppComponent,
    RoomConnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [
    WebRTCConnectionService,
    WebRTCClientService,
    MediaStreamService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
