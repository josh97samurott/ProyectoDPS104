import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServiceService } from '../Service/service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Archive } from '../Model/archive';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  message:string;
  message2:string;
  message3:string;
  message4:string;
  message5:string;

  //Tabla de user
  username:string;
  password:string;
  confirmpassword:string;
  name:string;
  lastname:string;
  email:string;
  phone:string;
  nationality:string;
  dui_or_passport:string;

  //Tabla de doctor_information (CV)
  public archive: Archive;
  public lastPK:number

  //Profesiones    
  profession_specialization;
  profession_specialization_select;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {  
    this.message = "";
    this.message2 = "";
    this.message3 = "";
    this.message4 = "";
    this.message5 = "";
    this.service.get_profession().subscribe(result => { this.profession_specialization = result });
  }

  registerPacient(registerpacientForm: NgForm){
    if(this.password == this.confirmpassword){
      this.message = "";
      var data = {
        username: this.username,
        password: this.password,
        name: this.name,
        lastname: this.lastname,
        role: 2,
        email: this.email,
        phone: this.phone,
        nationality: this.nationality,
        dui_or_passport: null
      }
  
      this.service.signup(data).subscribe(result => {
        if(result["res"] == 1){
          this.message = "";
          this.message3 = "";
          this.message4 = "";
          this.message5 = "";
          this.message2 = "Registro exitoso, por favor iniciar sesión con sus nuevas credenciales.";
          this.cleanForm();
        }
        else if(result["res"] == 0){
          this.message = "";
          this.message2 = "";
          this.message4 = "";
          this.message5 = "";
          this.message3 = "Hubo un problema al crear la cuenta, por favor intentelo de nuevo.";
        }
        else if(result["res"] == -1){
          this.message = "";
          this.message3 = "";
          this.message2 = "";
          this.message5 = "";
          this.message4 = "Ya existe una cuenta con el usuario ingresado, por favor intente con otro nombre de usuario.";
        }
        else if(result["res"] == -2){
          this.message = "";
          this.message3 = "";
          this.message2 = "";
          this.message4 = "";
          this.message5 = "Ya existe una cuenta con el correo eléctronico ingresado, por favor intente con otra cuenta de correo.";
        }
      });
    }
    else{
      this.message = "Las contraseñas no coinciden, por favor comprobar";
    }
  }

  fileEvent(fileInput: Event){
    let file = (<HTMLInputElement>fileInput.target).files[0];

    if(file.type == 'application/pdf'){
      this.archive = new Archive(this.lastPK + 1, file.name, file.type);
    }
  }

  registerDoctor(registerDoctor: NgForm){
    if(this.password == this.confirmpassword){
      var data = {
        username: this.username,
        password: this.password,
        name: this.name,
        lastname: this.lastname,
        role: 1,
        email: this.email,
        phone: this.phone,
        nationality: this.nationality,
        dui_or_passport: this.dui_or_passport,
        profession_specialization_select: this.profession_specialization_select,
        confirm_info: 0
      }

      
      this.service.signup(data).subscribe(result => {
          if(result["res"] == 1){
            this.message = "";
            this.message3 = "";
            this.message4 = "";
            this.message5 = "";
            this.message2 = "Registro exitoso, antes de poder iniciar sesión sus datos y credibilidad médica deben ser comprobados por lo que recibirá un correo eléctronico informandole sobre el estado de su cuenta en las proximas semanas.";
            this.cleanForm();
          }
          else if(result["res"] == 0){
            this.message = "";
            this.message2 = "";
            this.message4 = "";
            this.message5 = "";
            this.message3 = "Hubo un problema al crear la cuenta, por favor intentelo de nuevo.";
          }
          else if(result["res"] == -1){
            this.message = "";
            this.message3 = "";
            this.message2 = "";
            this.message5 = "";
            this.message4 = "Ya existe una cuenta con el usuario ingresado, por favor intente con otro nombre de usuario.";
          }
          else if(result["res"] == -2){
            this.message = "";
            this.message3 = "";
            this.message2 = "";
            this.message4 = "";
            this.message5 = "Ya existe una cuenta con el correo eléctronico ingresado, por favor intente con otra cuenta de correo.";
          }
      });
    }
    else{
      this.message = "Las contraseñas no coinciden, por favor comprobar";
    }
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
    "Afganistán", "Akrotiri", "Albania", "Alemania", "Andorra", "Angola", "Anguila", "Antártida", "Antigua y Barbuda", 
    "Antillas Neerlandesas", "Arabia Saudí", "Arctic Ocean", "Argelia", "Argentina", "Armenia", "Aruba", "Ashmore andCartier Islands", 
    "Atlantic Ocean", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bahráin", "Bangladesh", "Barbados", "Bélgica", "Belice", 
    "Benín", "Bermudas", "Bielorrusia", "Birmania Myanmar", "Bolivia", "Bosnia y Hercegovina", "Botsuana", "Brasil", "Brunéi", 
    "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Chad", "Chile", "China", "Chipre", 
    "Clipperton Island", "Colombia", "Comoras", "Congo", "Coral Sea Islands", "Corea del Norte", "Corea del Sur", "Costa de Marfil", 
    "Costa Rica", "Croacia", "Cuba", "Dhekelia", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "El Vaticano", 
    "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", 
    "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Gaza Strip", "Georgia", "Ghana", "Gibraltar", "Granada", "Grecia", "Groenlandia", 
    "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Ecuatorial", "Guinea-Bissau", "Guyana", "Haití", "Honduras", "Hong Kong", "Hungría", 
    "India", "Indian Ocean", "Indonesia", "Irán", "Iraq", "Irlanda", "Isla Bouvet", "Isla Christmas", "Isla Norfolk", "Islandia", 
    "Islas Caimán", "Islas Cocos", "Islas Cook", "Islas Feroe", "Islas Georgia del Sur y Sandwich del Sur", "Islas Heard y McDonald", 
    "Islas Malvinas", "Islas Marianas del Norte", "IslasMarshall", "Islas Pitcairn", "Islas Salomón", "Islas Turcas y Caicos", 
    "Islas Vírgenes Americanas", "Islas Vírgenes Británicas", "Israel", "Italia", "Jamaica", "Jan Mayen", "Japón", "Jersey", "Jordania", 
    "Kazajistán", "Kenia", "Kirguizistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", 
    "Lituania", "Luxemburgo", "Macao", "Macedonia", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Man, Isle of", 
    "Marruecos", "Mauricio", "Mauritania", "Mayotte", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montserrat", "Mozambique", 
    "Namibia", "Nauru", "Navassa Island", "Nepal", "Nicaragua", "Níger", "Nigeria", "Niue", "Noruega", "Nueva Caledonia", "Nueva Zelanda", 
    "Omán", "Pacific Ocean", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa-Nueva Guinea", "Paracel Islands", "Paraguay", "Perú", 
    "Polinesia Francesa", "Polonia", "Portugal", "Puerto Rico", "Qatar", "Reino Unido", "República Centroafricana", "República Checa", 
    "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", "Rusia", "Sáhara Occidental", "Samoa", "Samoa Americana", 
    "San Cristóbal y Nieves", "San Marino", "San Pedro y Miquelón", "San Vicente y las Granadinas", "Santa Helena", "Santa Lucía", 
    "Santo Tomé y Príncipe", "Senegal", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Southern Ocean", "Spratly Islands", 
    "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Suecia", "Suiza", "Surinam", "Svalbard y Jan Mayen", "Tailandia", "Taiwán", "Tanzania", 
    "Tayikistán", "TerritorioBritánicodel Océano Indico", "Territorios Australes Franceses", "Timor Oriental", "Togo", "Tokelau", "Tonga", 
    "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Unión Europea", "Uruguay", "Uzbekistán", 
    "Vanuatu", "Venezuela", "Vietnam", "Wake Island", "Wallis y Futuna", "West Bank", "World", "Yemen", "Yibuti", "Zambia", "Zimbabue"
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