import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userlogin } from '../Model/userlogin';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  url='http://localhost/ProyectoDPS104/backendcimo/';

  
  constructor(private http:HttpClient) { }

  recoveryDataUser(username:string, password:string){
    return this.http.get(`${this.url}log_in?username=${username}&password=${password}`);
  }

}
