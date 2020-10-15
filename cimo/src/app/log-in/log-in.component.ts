import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogInService } from '../Service/log-in.service';
import { HttpClient } from '@angular/common/http';
import { Userlogin } from '../Model/userlogin';
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

  constructor(private loginService:LogInService, private router:Router) { }

  ngOnInit(){

  }

  logIn(loginForm: NgForm){
    this.loginService.recoveryDataUser(this.username, this.password).subscribe(result => {
      if(result['access'] == 1){
        if(result["role"] == 0){
          this.router.navigate(["admindashboard"]);
        }else if(result["role"] == 1){
          window.location.href = "doctordashboard"
        }else if(result["role"] == 2){
          this.router.navigate(["pacientdashboard"]);
        }
      }
      else{
        this.message = "El usuario o contraseña es incorrecto, por favor intentelo de nuevo.";
      }
    });
  }


}
