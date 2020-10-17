import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../Service/service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  username:string;
  password:string;
  confirmpassword:string;
  name:string;
  lastname:string;
  email:string;
  phone:string;
  nationality:string;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  registerPacient(registerpacientForm: NgForm){
    var data = {
      username: this.username,
      password: this.password,
      name: this.name,
      lastname: this.lastname,
      role: 2,
      email: this.email,
      phone: this.phone,
      nationality: this.nationality,
      dui_or_passport: null,
    }

    this.service.signup(data).subscribe(result => {
      if(result["access"] == 1){
        alert("Registro exitoso, por favor iniciar sesión con sus nuevas credenciales.");
        this.cleanForm();
      }
      else{
        alert("Hubo un problema al crear la cuenta, por favor intentelo de nuevo.");
      }
    });

  }

  cleanForm(){
    this.username = null;
    this.password = null;
    this.email = null;
    this.lastname = null;
    this.name = null;
    this.nationality = null;
    this.confirmpassword = null;
    this.phone = null;
  }


  //-----Select de paises-----------------------------------------------------------------------------
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];

  // Initially fill the selectedStates so it can be used in the for loop** 
  selectedStates = this.states; 

  // Receive user input and send to search method**
  onKey(value) { 
  this.selectedStates = this.search(value);
  }

  // Filter the states list and send back to populate the selectedStates**
  search(value: string) { 
    let filter = value.toLowerCase();
    return this.states.filter(option => option.toLowerCase().startsWith(filter));
  }

}
