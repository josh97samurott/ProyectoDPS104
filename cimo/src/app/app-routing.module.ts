import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importaciones de componentes
import { LogInComponent } from '../app/log-in/log-in.component';
import { HeaderComponent } from '../app/templates/header/header.component';
import { AdminComponent } from '../app/dashboard/admin/admin.component';
import { DoctorComponent } from '../app/dashboard/doctor/doctor.component';
import { PacientComponent } from '../app/dashboard/pacient/pacient.component';
import { PrincipalpageComponent } from './principalpage/principalpage.component';
import { SitePoliciesComponent } from './site-policies/site-policies.component';
import { ChatfrontendComponent } from './cimo/chatfrontend/chatfrontend.component';
import { VideoconferencefrontendComponent } from './cimo/videoconferencefrontend/videoconferencefrontend.component';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent, pathMatch: 'full' }, //Los siguientes son de plantillas
  { path: 'header', component: HeaderComponent },
  { path: 'admindashboard', component: AdminComponent, pathMatch: 'full' },
  { path: 'doctordashboard', component: DoctorComponent, pathMatch: 'full' },
  { path: 'pacientdashboard', component: PacientComponent, pathMatch: 'full' },
  { path: 'inicio', component: PrincipalpageComponent },
  { path: 'politicas', component: SitePoliciesComponent },
  { path: 'chat-frontend', component: ChatfrontendComponent },
  { path: 'videoconferences-frontend', component: VideoconferencefrontendComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
