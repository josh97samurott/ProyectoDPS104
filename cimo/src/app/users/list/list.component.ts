import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ServiceService} from '../../Service/service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListComponent implements AfterViewInit {
  //Campos de ingreso o modificación de usuario
  id;
  username;
  password;
  name;
  lastname;
  role;
  email;
  phone;
  nationality;
  dui_or_passport;
  creation_date;
  confirm_email;

  //Extras campos doctor;
  id_doctor_information;
  observation;
  confirm_info;
  id_profession_specialization;

  profession_specialization;


  //Mensajes
  message_user_repeated = "";
  message_email_repeated = "";
  message_ok = "";
  message_failed = "";
  message_delete = "";
  

  //Habilitación de botones
  edit:boolean;

  //Datasource
  userspacients;
  displayedColumnsPacients: string[] = ['id', 'username','name','lastname','email'];
  usersdoctors;
  displayedColumnsDoctors: string[] = ['id_user', 'username','name','lastname','email'];
  usersadministrators;
  displayedColumnsAdministrators: string[] = ['id', 'username','name','lastname','email'];
  
  
  constructor(private service:ServiceService) { }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    //this.dataSourceAdmnistrators.sort = this.sort;
  }

  setVarInit(){
    this.id = null;
    this.username = "";
    this.password = "";
    this.name = "";
    this.lastname = "";
    this.role = "";
    this.email = "";
    this.phone = "";
    this.nationality = "";
    this.dui_or_passport = "";
    this.creation_date = "";
    this.confirm_email = "";
    this.confirm_email = "";
    this.observation = "";
    this.id_profession_specialization = null;
    this.id_doctor_information = null;
  }

  ngOnInit(): void {
    this.edit = false;
    this.setVarInit();
    this.service.get_users_pacients().subscribe(result => {this.userspacients = result});
    this.service.get_users_doctors().subscribe(result => {this.usersdoctors = result});
    this.service.get_users_administrators().subscribe(result => {this.usersadministrators = result});
    this.service.get_profession().subscribe(result => { this.profession_specialization = result });
  }

  actionForm(dataForm?: NgForm){
      this.message_delete = "";
      var data;
      if(this.edit == true){
        //Actualización de usuario
        //Inserción de usuario
        data = {
          id: this.id,
          username: this.username,
          password: this.password,
          name: this.name,
          lastname: this.lastname,
          role: this.role,
          email: this.email,
          phone: this.phone,
          nationality: this.nationality,
          dui_or_passport: this.dui_or_passport
        }
        
        this.service.update_user(data).subscribe(result => {
          if(result["res"] == 1){
            this.message_email_repeated = "";
            this.message_user_repeated = "";
            this.message_ok = "La cuenta de usuario se ha actualizado exitosamente";
            this.setVarInit();
          }
          else if(result["res"] == 0){
            this.message_email_repeated = "";
            this.message_user_repeated = "";
            this.message_ok = "";
            this.message_failed = "Hubo un problema al actualizar la cuenta, por favor intentelo de nuevo.";
          }
          else if(result["res"] == -1){
            this.message_email_repeated = "";
            this.message_ok = "";
            this.message_failed = "";
            this.message_user_repeated = "Ya existe una cuenta con el usuario ingresado, por favor intente con otro nombre de usuario.";
          }
          else if(result["res"] == -2){
            this.message_user_repeated = "";
            this.message_ok = "";
            this.message_failed = "";
            this.message_email_repeated = "Ya existe una cuenta con el correo eléctronico ingresado, por favor intente con otra cuenta de correo.";
          }
        });

        this.service.get_users_pacients().subscribe(result => {this.userspacients = result});
        this.service.get_users_doctors().subscribe(result => {this.usersdoctors = result});
        this.service.get_users_administrators().subscribe(result => {this.usersadministrators = result});
      }
      else{
        //Inserción de usuario
        data = {
          username: this.username,
          password: this.password,
          name: this.name,
          lastname: this.lastname,
          role: this.role,
          email: this.email,
          phone: this.phone,
          nationality: this.nationality,
          dui_or_passport: this.dui_or_passport
        }
        
        this.service.signup(data).subscribe(result => {
          if(result["res"] == 1){
            this.message_email_repeated = "";
            this.message_user_repeated = "";
            this.message_ok = "La cuenta con usuario ("+this.username+") ha sido creada exitosamente";
            this.setVarInit();
          }
          else if(result["res"] == 0){
            this.message_email_repeated = "";
            this.message_user_repeated = "";
            this.message_ok = "";
            this.message_failed = "Hubo un problema al crear la cuenta, por favor intentelo de nuevo.";
          }
          else if(result["res"] == -1){
            this.message_email_repeated = "";
            this.message_ok = "";
            this.message_failed = "";
            this.message_user_repeated = "Ya existe una cuenta con el usuario ingresado, por favor intente con otro nombre de usuario.";
          }
          else if(result["res"] == -2){
            this.message_user_repeated = "";
            this.message_ok = "";
            this.message_failed = "";
            this.message_email_repeated = "Ya existe una cuenta con el correo eléctronico ingresado, por favor intente con otra cuenta de correo.";
          }
        });

        this.service.get_users_pacients().subscribe(result => {this.userspacients = result});
        this.service.get_users_doctors().subscribe(result => {this.usersdoctors = result});
        this.service.get_users_administrators().subscribe(result => {this.usersadministrators = result});
      }
  }


  update(id_user){
    this.message_delete = "";
    this.service.get_user_information(id_user).subscribe(result=> {
      this.id = result["id"];
      this.username = result["username"];
      this.name = result["name"];
      this.lastname = result["lastname"];
      this.role = result["role"];
      this.email = result["email"];
      this.phone = result["phone"];
      this.nationality = result["nationality"];
      this.dui_or_passport = result["dui_or_passport"];
      this.creation_date = result["creation_date"];
      this.confirm_email = result["confirm_email"];
    });
    this.edit=true;
  }

  updateDoctor(id_user){
    this.message_delete = "";
    this.service.get_doctor_information(id_user).subscribe(result=> {
      this.id = result["id_user"];
      this.username = result["username"];
      this.name = result["name"];
      this.lastname = result["lastname"];
      this.role = result["role"];
      this.email = result["email"];
      this.phone = result["phone"];
      this.nationality = result["nationality"];
      this.dui_or_passport = result["dui_or_passport"];
      this.creation_date = result["creation_date"];
      this.confirm_email = result["confirm_email"];
      this.confirm_info = result["confirm_info"];
      this.id_doctor_information = result["id_doctor_information"];
      this.id_profession_specialization = result["id_profession_specialization"];
      this.observation = result["observation"];
    });
    this.edit=true;
  }

  changeButton(){
    this.edit = false;
  }

  delete(id_user){
    this.service.delete_user(id_user).subscribe(result=> {
      if(result["res"] == 1){
        this.message_delete = "El usuario ha sido eliminado de forma satisfactoria.";
      }
      else{
        this.message_delete = "Hubo un inconveniente eliminando el usuario, por favor intentelo de nuevo";
      }
    });

    this.service.get_users_pacients().subscribe(result => {this.userspacients = result});
    this.service.get_users_doctors().subscribe(result => {this.usersdoctors = result});
    this.service.get_users_administrators().subscribe(result => {this.usersadministrators = result});
  }

  deleteDoctor(id_u, id_info, id_p){
    this.service.delete_doctor(id_u, id_info, id_p).subscribe(result=> {
      if(result["res"] == 1){
        this.message_delete = "El usuario ha sido eliminado de forma satisfactoria.";
      }
      else{
        this.message_delete = "Hubo un inconveniente eliminando el usuario, por favor intentelo de nuevo";
      }
    });

    this.service.get_users_pacients().subscribe(result => {this.userspacients = result});
    this.service.get_users_doctors().subscribe(result => {this.usersdoctors = result});
    this.service.get_users_administrators().subscribe(result => {this.usersadministrators = result});
  }

  actionFormDoctor(dataForm?: NgForm){
    this.message_delete = "";
    var data;
    if(this.edit == true){
      //Actualización de usuario
      data = {
        id: this.id,
        username: this.username,
        password: this.password,
        name: this.name,
        lastname: this.lastname,
        role: this.role,
        email: this.email,
        phone: this.phone,
        nationality: this.nationality,
        dui_or_passport: this.dui_or_passport,
        id_doctor_information: this.id_doctor_information,
        observation: this.observation,
        confirm_info: this.confirm_info,
        profession_specialization_select: this.id_profession_specialization
      }
      
      this.service.update_user(data).subscribe(result => {
        if(result["res"] == 1){
          this.message_email_repeated = "";
          this.message_user_repeated = "";
          this.message_ok = "La cuenta de usuario se ha actualizado exitosamente";
          this.setVarInit();
        }
        else if(result["res"] == 0){
          this.message_email_repeated = "";
          this.message_user_repeated = "";
          this.message_ok = "";
          this.message_failed = "Hubo un problema al actualizar la cuenta, por favor intentelo de nuevo.";
        }
        else if(result["res"] == -1){
          this.message_email_repeated = "";
          this.message_ok = "";
          this.message_failed = "";
          this.message_user_repeated = "Ya existe una cuenta con el usuario ingresado, por favor intente con otro nombre de usuario.";
        }
        else if(result["res"] == -2){
          this.message_user_repeated = "";
          this.message_ok = "";
          this.message_failed = "";
          this.message_email_repeated = "Ya existe una cuenta con el correo eléctronico ingresado, por favor intente con otra cuenta de correo.";
        }
      });

      this.service.get_users_doctors().subscribe(result => {this.usersdoctors = result});
    }
    else{
      //Inserción de usuario
      data = {
        username: this.username,
        password: this.password,
        name: this.name,
        lastname: this.lastname,
        role: this.role,
        email: this.email,
        phone: this.phone,
        nationality: this.nationality,
        dui_or_passport: this.dui_or_passport,
        observation: this.observation,
        confirm_info: this.confirm_info,
        profession_specialization_select: this.id_profession_specialization
      }
      this.service.signup(data).subscribe(result => {
        if(result["res"] == 1){
          this.message_email_repeated = "";
          this.message_user_repeated = "";
          this.message_ok = "La cuenta con usuario ("+this.username+") ha sido creada exitosamente";
          this.setVarInit();
        }
        else if(result["res"] == 0){
          this.message_email_repeated = "";
          this.message_user_repeated = "";
          this.message_ok = "";
          this.message_failed = "Hubo un problema al crear la cuenta, por favor intentelo de nuevo.";
        }
        else if(result["res"] == -1){
          this.message_email_repeated = "";
          this.message_ok = "";
          this.message_failed = "";
          this.message_user_repeated = "Ya existe una cuenta con el usuario ingresado, por favor intente con otro nombre de usuario.";
        }
        else if(result["res"] == -2){
          this.message_user_repeated = "";
          this.message_ok = "";
          this.message_failed = "";
          this.message_email_repeated = "Ya existe una cuenta con el correo eléctronico ingresado, por favor intente con otra cuenta de correo.";
        }
      });

      this.service.get_users_doctors().subscribe(result => {this.usersdoctors = result});
    }
}














  //-----Select de paises-----------------------------------------------------------------------------
  states: string[] = [
    "Afganistán","Albania","Alemania","Andorra","Angola","Antigua y Barbuda","Arabia Saudita","Argelia","Argentina","Armenia","Australia","Austria","Azerbaiyán","Bahamas","Bangladés","Barbados","Baréin","Bélgica","Belice","Benín","Bielorrusia","Birmania","Bolivia","Bosnia y Herzegovina","Botsuana","Brasil","Brunéi","Bulgaria","Burkina Faso","Burundi","Bután","Cabo Verde","Camboya","Camerún","Canadá","Catar","Chad","Chile","China","Chipre","Ciudad del Vaticano","Colombia","Comoras","Corea del Norte","Corea del Sur","Costa de Marfil","Costa Rica","Croacia","Cuba","Dinamarca","Dominica","Ecuador","Egipto","El Salvador","Emiratos Árabes Unidos","Eritrea","Eslovaquia","Eslovenia","España","Estados Unidos","Estonia","Etiopía","Filipinas","Finlandia","Fiyi","Francia","Gabón","Gambia","Georgia","Ghana","Granada","Grecia","Guatemala","Guyana","Guinea","Guinea ecuatorial","Guinea-Bisáu","Haití","Honduras","Hungría","India","Indonesia","Irak","Irán","Irlanda","Islandia","Islas Marshall","Islas Salomón","Israel","Italia","Jamaica","Japón","Jordania","Kazajistán","Kenia","Kirguistán","Kiribati","Kuwait","Laos","Lesoto","Letonia","Líbano","Liberia","Libia","Liechtenstein","Lituania","Luxemburgo","Madagascar","Malasia","Malaui","Maldivas","Malí","Malta","Marruecos","Mauricio","Mauritania","México","Micronesia","Moldavia","Mónaco","Mongolia","Montenegro","Mozambique","Namibia","Nauru","Nepal","Nicaragua","Níger","Nigeria","Noruega","Nueva Zelanda","Omán","Países Bajos","Pakistán","Palaos","Panamá","Papúa Nueva Guinea","Paraguay","Perú","Polonia","Portugal","Reino Unido","República Centroafricana","República Checa","República de Macedonia","República del Congo","República Democrática del Congo","República Dominicana","República Sudafricana","Ruanda","Rumanía","Rusia","Samoa","San Cristóbal y Nieves","San Marino","San Vicente y las Granadinas","Santa Lucía","Santo Tomé y Príncipe","Senegal","Serbia","Seychelles","Sierra Leona","Singapur","Siria","Somalia","Sri Lanka","Suazilandia","Sudán","Sudán del Sur","Suecia","Suiza","Surinam","Tailandia","Tanzania","Tayikistán","Timor Oriental","Togo","Tonga","Trinidad y Tobago","Túnez","Turkmenistán","Turquía","Tuvalu","Ucrania","Uganda","Uruguay","Uzbekistán","Vanuatu","Venezuela","Vietnam","Yemen","Yibuti","Zambia","Zimbabue"
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
