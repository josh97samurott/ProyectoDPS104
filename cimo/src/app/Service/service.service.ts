import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

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

  /*upload_cv_doctor(File): Observable<any>{
    return this.http.post(`${this.url}sign_up_upload`, JSON.stringify(File));
  }*/

  get_profession(){
    return this.http.get(`${this.url}get_profession`);
  }

  register_videoconference(datos){
    return this.http.post(`${this.url}register_videoconference`, JSON.stringify(datos));
  }

  register_chatconference(datos){
    return this.http.post(`${this.url}register_chatconference`, JSON.stringify(datos));
  }

  payment(id){
    return this.http.get(`${this.url}payment?id=${id}`);
  }

  user_info(id){
    return this.http.get(`${this.url}user_info?id=${id}`);
  }

  user_update(data){
    return this.http.post(`${this.url}user_update`, JSON.stringify(data));
  }

  video_doctor(){
    return this.http.get(`${this.url}manage_video`);
  }

  accept_videoconference(data){
    return this.http.post(`${this.url}accept_videoconference`, JSON.stringify(data));
  }

  chat_doctor(){
    return this.http.get(`${this.url}manage_chat`);
  }

  accept_chatconference(data){
    return this.http.post(`${this.url}accept_chatconference`, JSON.stringify(data));
  }
  
  get_users_pacients(){
    return this.http.get(`${this.url}get_users_pacients`);
  }

  get_users_doctors(){
    return this.http.get(`${this.url}get_users_doctors`);
  }

  get_users_administrators(){
    return this.http.get(`${this.url}get_users_administrators`);
  }

  get_user_information(id_user){
    return this.http.get(`${this.url}get_user_information?id=${id_user}`);
  }

  get_doctor_information(id_user){
    return this.http.get(`${this.url}get_doctor_information?id_user=${id_user}`);
  }

  update_user(datos){
    return this.http.post(`${this.url}update_user`, JSON.stringify(datos));
  }

  delete_user(id_user){
    return this.http.get(`${this.url}delete_user?id=${id_user}`);
  }

  delete_doctor(id_user, id_info, id_p){
    return this.http.get(`${this.url}delete_doctor?id_user=${id_user}&id_info=${id_info}&aid_p=${id_p}`);
  }

}
