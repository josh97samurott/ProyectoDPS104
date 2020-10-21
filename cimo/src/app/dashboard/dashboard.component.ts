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
  id:number;
  username:string;
  name:string;
  lastname:string;
  email:string;
  phone:number;
  nationality:string;
  dui_or_passport:string;

  codigo:number;



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
          this.id = this.datos['id'];
          this.username = this.datos['username'];
          this.name = this.datos['name'];
          this.lastname = this.datos['lastname'];
          this.email = this.datos['email'];
          this.phone = this.datos['phone'];
          this.nationality = this.datos['nationality'];
          this.dui_or_passport = this.datos['dui_or_passport'];
          this.codigo = 0;
    });
  }

  seleccionar(id_user){
    this.codigo = id_user;
  }
  actualizar(){
    this.codigo = 0;
    var datos = {
      id : this.id,
      username : this.username,
      name : this.name,
      lastname : this.lastname,
      email : this.email,
      phone : this.phone,
      nationality : this.nationality,
      dui_or_passport : this.dui_or_passport
    }

    this.service.user_update(datos).subscribe(result =>{
      if(result['access']=='true'){
        alert("Se actualizo el registro");
      }
      else{
        alert("Error en la actualizacion");
      }
      
    });


  }

}
