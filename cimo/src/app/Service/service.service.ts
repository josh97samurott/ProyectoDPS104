import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  url='http://localhost/ProyectoDPS104/backendcimo/';

  constructor(private http:HttpClient, private cookies:CookieService) { }

  login(username?:string, password?:string){
    return this.http.get(`${this.url}log_in?username=${username}&password=${password}`);
  }
  
  setTokenLogin(id:string, username:string, name:string, lastname:string, email:string, role:string, access:string){
    this.cookies.set('id', id);
    this.cookies.set('username', username);
    this.cookies.set('name', name);
    this.cookies.set('lastname', lastname);
    this.cookies.set('email', email);
    this.cookies.set('role', role);
    this.cookies.set('access', access);
  }

  getToken(namecookie:string){
    return this.cookies.get(namecookie);    
  }
  
  logOut(){
    this.cookies.deleteAll();
  }

  signup(datos){
    return this.http.post(`${this.url}sign_up`, JSON.stringify(datos));
  }

}
