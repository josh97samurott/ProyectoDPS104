import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../app/Service/service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  title = 'cimo';
  access:string;
  role:string;


  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.access = this.service.getToken("access");
    this.role = this.service.getToken("role");
  }

  closeSession(){
    this.service.logOut();
    this.router.navigate(["log-in"]);
  }

}
