import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importaciones de componentes
import { LogInComponent } from '../app/log-in/log-in.component';
import { HeaderComponent } from '../app/templates/header/header.component';
import { ChatComponent } from './cimo/chat/chat.component';
import { VideoconferencesComponent } from './cimo/videoconferences/videoconferences.component';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent }, //Los siguientes son de plantillas
  { path: 'header', component: HeaderComponent }
  //{ path: 'chat', component: ChatComponent }, Agregador por Will
  //{ path: 'videoconferences', component: VideoconferencesComponent } Agregados por Will

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
