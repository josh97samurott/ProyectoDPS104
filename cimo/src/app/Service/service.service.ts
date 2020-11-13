import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  userexist = true;
  url='http://localhost/ProyectoDPS104/backendcimo/';
  //url = 'https://citasmedicasonline.000webhostapp.com/backendcimo/';

  constructor(
    public http:HttpClient, 
    public cookies:CookieService,
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public ngZone: NgZone,
    public router: Router) { }

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

  calender(data){
    return this.http.post(`${this.url}calender_and_access_date`, JSON.stringify(data));
  }



  //Logueo con google
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  AuthLogin(provider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          
        })
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error)
    })
  }

  SetUserData(user) {
    var userData = {
      username: user.email,
      password: user.uid,
      name: user.displayName,
      lastname: user.displayName,
      role: 2,
      email: user.email,
      phone: null,
      nationality: "Desconocida",
      dui_or_passport: null
    }

    this.signup(userData).subscribe();
  
    this.login(user.email, user.uid).subscribe(result => {
      if(result["access"] == 1){
        this.setTokenLogin(result["id"],result["username"], result["name"], result["lastname"], result["email"], result["role"], result["access"]);
        window.location.href = "/dashboard";
      }
      else{
        alert("El inicio de sesión a través de google fallo, por favor intentelo de nuevo");
      }
    });

    /*const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })*/
  }
}
