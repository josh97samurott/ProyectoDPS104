import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../Service/service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  public username:string;
  public password:string;
  public message:string;

  constructor(public service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.message = "";
  }

  logIn(loginForm: NgForm){
    this.service.login(this.username, this.password).subscribe(result => {
      if(result['access'] == 1){
        this.message = "";
        this.service.setTokenLogin(result["id"],result["username"], result["name"], result["lastname"], result["email"], result["role"], result["access"]);
        if(result["role"] == 0){
          window.location.href = "/principalpage";
        }else if(result["role"] == 1){
          window.location.href = "/principalpage";
        }else if(result["role"] == 2){
          window.location.href = "/principalpage";
        }
      }
      else{
        this.message = "El usuario o contraseña es incorrecto, por favor intentelo de nuevo.";
      }
    });
  }


}
