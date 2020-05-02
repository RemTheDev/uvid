import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomConnectionComponent } from './components/room-connection/room-connection.component';


const routes: Routes = [
  { path: '', redirectTo: 'room-connection/', pathMatch: 'full' },
  { path: 'room-connection', redirectTo: 'room-connection/', pathMatch: 'full' },
  { path: 'room-connection/:roomId', component: RoomConnectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
