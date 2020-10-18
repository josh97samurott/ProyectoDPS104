import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../../Service/service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videoconferencefrontend',
  templateUrl: './videoconferencefrontend.component.html',
  styleUrls: ['./videoconferencefrontend.component.css']
})
export class VideoconferencefrontendComponent implements OnInit {

  date:string;
  start_session:string;
  duration:number;
  profession:string;
  specialization:number;
  commentary:string;
  age:number;


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
  }

  registerVideo(registervideoForm: NgForm){
    
    var data={
      id_pacient:2,
      id_profession_specialization: this.specialization,
      age: this.age,
      date:this.date,
      start_session:this.start_session,
      duration:this.duration,
      type_date:"videoconferencia",
      commentary:this.commentary
      
    }

    this.service.register_videoconference(data).subscribe(result => {
      if(result["res"] == "funciono"){
        alert("Registro de cita por videoconferencia exitoso.");
        this.cleanForm();
      }
      else{
        alert("Hubo un problema, por favor intentelo de nuevo.");
      }
    });

  }

  cleanForm(){
    this.start_session= null;
    this.commentary=null;

  }

}
