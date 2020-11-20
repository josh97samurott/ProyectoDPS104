import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../Service/service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'cimo';
  access:string;
  role:string;

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
  password:string;
  cpassword:string;

  codigo:number;



  constructor(private service:ServiceService,  private router:Router) { 

  }

  ngOnInit(): void {
    this.recovery_user();
    this.access = this.service.getToken("access");
    this.role = this.service.getToken("role");
  }

  closeSession(){
    this.service.logOut();
    this.router.navigate(["log-in"]);
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
          this.password = "";
          this.cpassword = "";
    });
  }

  seleccionar(id_user){
    this.codigo = id_user;
  }
  actualizar(){
    if(this.password == this.cpassword){
      this.codigo = 0;
      var datos = {
        id : this.id,
        username : this.username,
        name : this.name,
        lastname : this.lastname,
        email : this.email,
        phone : this.phone,
        nationality : this.nationality,
        dui_or_passport : this.dui_or_passport,
        password : this.password
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
    else{
      alert("¡Las contraseñas no coinciden, por favor comprobar!");
    }
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
