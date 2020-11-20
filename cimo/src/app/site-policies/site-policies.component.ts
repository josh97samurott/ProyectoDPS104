import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../app/Service/service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-policies',
  templateUrl: './site-policies.component.html',
  styleUrls: ['./site-policies.component.css']
})
export class SitePoliciesComponent implements OnInit {
  title = 'cimo';
  access:string;
  role:string;

  constructor(private service:ServiceService, private router:Router) {
  }

  ngOnInit() {
    this.access = this.service.getToken("access");
    this.role = this.service.getToken("role");
  }

  closeSession(){
    this.service.logOut();
    this.router.navigate(["log-in"]);
  }
}
