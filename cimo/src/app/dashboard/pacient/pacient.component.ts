import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../app/Service/service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacient',
  templateUrl: './pacient.component.html',
  styleUrls: ['./pacient.component.css']
})
export class PacientComponent implements OnInit {
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
