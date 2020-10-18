import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importaciones de componentes
import { LogInComponent } from '../app/log-in/log-in.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { PrincipalpageComponent } from './principalpage/principalpage.component';
import { SitePoliciesComponent } from './site-policies/site-policies.component';
import { ChatfrontendComponent } from './cimo/chatfrontend/chatfrontend.component';
import { VideoconferencefrontendComponent } from './cimo/videoconferencefrontend/videoconferencefrontend.component';
import { PaymentComponent } from './payment/payment.component';
import { PayrollComponent } from './payroll/payroll.component';
import { StatisticalComponent } from './statistical/statistical.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ServicesInfoComponent } from './services-info/services-info.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UsersComponent } from './users/users.component';
import { ChatComponent } from './management-cimo/chat/chat.component';
import { VideoconferencesComponent } from './management-cimo/videoconferences/videoconferences.component';
import { ErrorControlComponent } from './error-control/error-control.component';
import { CalenderAndAccessDateComponent } from './calender-and-access-date/calender-and-access-date.component';
import { ChatDoctorComponent } from './cimo/chat-doctor/chat-doctor.component';
import { VideoDoctorComponent } from './cimo/video-doctor/video-doctor.component';


const routes: Routes = [
  { path: '', component: PrincipalpageComponent },
  { path: 'principalpage', component: PrincipalpageComponent, pathMatch: 'full' },
  { path: 'log-in', component: LogInComponent, pathMatch: 'full' },
  { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
  { path: 'services-info', component: ServicesInfoComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'users', component: UsersComponent, pathMatch: 'full' },
  { path: 'managment-chat', component: ChatComponent, pathMatch: 'full' },
  { path: 'managment-videoconferences', component: VideoconferencesComponent, pathMatch: 'full' },
  { path: 'payroll', component: PayrollComponent, pathMatch: 'full'},
  { path: 'statistical', component: StatisticalComponent, pathMatch: 'full' },
  { path: 'error-control', component: ErrorControlComponent, pathMatch: 'full' },
  { path: 'calendar-and-access-date', component: CalenderAndAccessDateComponent, pathMatch: 'full' },
  { path: 'chat-frontend', component: ChatfrontendComponent },
  { path: 'videoconferences-frontend', component: VideoconferencefrontendComponent },
  { path: 'payment', component: PaymentComponent},
  { path: 'chat-doctor', component: ChatDoctorComponent},
  { path: 'video-doctor', component: VideoDoctorComponent},
  
  { path: 'inicio', component: PrincipalpageComponent },
  { path: 'politicas', component: SitePoliciesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
