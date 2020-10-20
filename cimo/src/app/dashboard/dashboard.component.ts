import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  datos=null;
  iduser:any;
  username:string;
  name:string;
  lastname:string;
  email:string;
  phone:number;
  nationality:string;
  dui_or_passport:string;



  constructor(private service:ServiceService) { 

  }

  ngOnInit(): void {
    this.recovery_user();
  }

  recovery_user(){
    this.iduser=this.service.getToken('id');
    //console.log(this.iduser);
    this.service.user_info(this.iduser).subscribe(result =>{

          this.datos=result; 
          this.username = this.datos['username'];
          this.name = this.datos['name'];
          this.lastname = this.datos['lastname'];
          this.email = this.datos['email'];
          this.phone = this.datos['phone'];
          this.nationality = this.datos['nationality'];
          this.dui_or_passport = this.datos['dui_or_passport'];
    });
  }

}
