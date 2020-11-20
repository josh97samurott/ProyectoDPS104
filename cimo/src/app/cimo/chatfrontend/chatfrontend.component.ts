import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../Service/service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatfrontend',
  templateUrl: './chatfrontend.component.html',
  styleUrls: ['./chatfrontend.component.css']
})
export class ChatfrontendComponent implements OnInit {
  title = 'cimo';
  access:string;
  role:string;


  current_date=new Date();

  date:string;
  start_session:string;
  duration:number;
  profession:string;
  specialization:number;
  commentary:string;
  age:number;

  /*datos para la tabla billing */

  number_card:number;
  expiration_date_card:string;
  to_name_card:string;
  security_code:number;
  total:number;

  profession_specialization;

  lista:any=[
    {duracion:"30 minutos", cantidad:30},
    {duracion: "1 hora", cantidad:60},
    {duracion: "2 horas", cantidad:120}];

  profesiones:any=["Medico"];

  
  especializaciones:any=[
    {tipo:"Psicologo", id:1},
    {tipo: "Nutricionista", id:2},
    {tipo: "Pediatra", id:3},
    {tipo: "Medico general", id:4}];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.total=0;
    this.access = this.service.getToken("access");
    this.role = this.service.getToken("role");
    this.service.get_profession().subscribe(result => { this.profession_specialization = result });
  }

  closeSession(){
    this.service.logOut();
    this.router.navigate(["log-in"]);
  }

  registerChat(registervideoForm: NgForm){

       //pago por hora de consulta el pago base es 8$
    /* 30 minutos 8$
       1 hora 16$
       2 horas 24$ */

       if(this.duration==30){
        this.total=8;
      }
      else if(this.duration==60){
        this.total=16;
      }
      else if(this.duration==120){
        this.total=24;
      }
    
    var data={
      id_pacient:this.service.getToken('id'),
      id_profession_specialization: this.specialization,
      age: this.age,
      date:this.date,
      start_session:this.start_session,
      duration:this.duration,
      type_date:"chat en linea",
      commentary:this.commentary,
      //aqui comienzan los datos para billing de pago
      current_date:this.current_date,
      description:"Compra de sesión de chat en linea",
      number_card:this.number_card,
      expiration_date_card:this.expiration_date_card,
      to_name_card:this.to_name_card,
      security_code:this.security_code,
      total:this.total,
      state:"espera"
      
    }

    this.service.register_chatconference(data).subscribe(result => {
      if(result["res"] == "funciono"){
        alert("Registro de cita por chat en linea exitoso.");
        this.cleanForm();
      }
      else{
        alert("Hubo un problema, por favor intentelo de nuevo.");
      }
    });
   
    console.log(data);
  }

  cleanForm(){
    this.date=null;
    this.duration=null;
    this.profession=null;
    this.specialization=null;
    this.age=null;
    this.start_session= null;
    this.commentary=null;

    this.number_card=null;
    this.expiration_date_card=null;
    this.to_name_card=null;
    this.security_code=null;
    this.total=0;

  }

  pago(){
    this.total = this.duration;
  }

}
