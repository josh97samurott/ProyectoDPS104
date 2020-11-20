import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceService } from '../Service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  title = 'cimo';
  access:string;
  role:string;


  datos=null;


  iduser:any;
  

  

  constructor(private service:ServiceService,  private router:Router) { 
    this.recovery_billing();
    

  }



  ngOnInit(): void {
    this.recovery_billing();
    this.access = this.service.getToken("access");
    this.role = this.service.getToken("role");
  }

  closeSession(){
    this.service.logOut();
    this.router.navigate(["log-in"]);
  }

  recovery_billing(){
    this.iduser=this.service.getToken('id');
    console.log(this.iduser);
    this.service.payment(this.iduser).subscribe(result =>{

     
          this.datos=result;
      

    });

  }

  




}




