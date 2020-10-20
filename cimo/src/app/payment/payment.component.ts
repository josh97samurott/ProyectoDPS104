import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceService } from '../Service/service.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  datos=null;


  iduser:any;
  

  

  constructor(private service:ServiceService) { 
    this.recovery_billing();
    

  }



  ngOnInit(): void {
    this.recovery_billing();
  }

  recovery_billing(){
    this.iduser=this.service.getToken('id');
    console.log(this.iduser);
    this.service.payment(this.iduser).subscribe(result =>{

     
          this.datos=result;
      

    });

  }

  




}




