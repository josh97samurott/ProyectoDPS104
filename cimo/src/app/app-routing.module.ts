import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importaciones de componentes
import { LogInComponent } from '../app/log-in/log-in.component';
import { HeaderComponent } from '../app/templates/header/header.component';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent }, //Los siguientes son de plantillas
  { path: 'header', component: HeaderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
