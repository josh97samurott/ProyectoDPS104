import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ServiceService } from '../../app/Service/service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';




export interface Clientes {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  pago: number;
  fecha_consulta: string;
}
export interface Doctor {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  sueldo_neto: number

}

export interface Administrativo {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  sueldo_neto: number

}

const ELEMENT_DATA_CLIENTE: Clientes[] = [
  {name: 'Hydrogen', lastname: 'apellido 1',email: 'correo@correo.com', phone: '2222-2333', pago: 1200, fecha_consulta:'01/01/01'},
  {name: 'Hydrogen', lastname: 'apellido 1',email: 'correo@correo.com', phone: '2222-2333', pago: 1200, fecha_consulta:'01/01/01'}
];



const ELEMENT_DATA_DOCTOR: Doctor[] = [
  {name: 'Doctor', lastname: 'apellido 1',email: 'correo@correo.com', phone: '2222-2333',sueldo_neto: 233}
];

const ELEMENT_DATA_ADMINISTRATIVO: Administrativo[] = [
  {name: 'Doctor', lastname: 'apellido 1',email: 'correo@correo.com', phone: '2222-2333',sueldo_neto: 451}
];



export interface DialogData{
  animal: string;
  name: string;
}


@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})

export class  PayrollComponent  implements OnInit {
  title = 'cimo';
  access:string;
  role:string;

  animal: string;
  name: string;


  ClientesColumns: string[] = ['name', 'lastname', 'email', 'phone', 'pago','fecha_consulta'];
  DoctoresColumns: string[] = ['name', 'lastname', 'email', 'phone','sueldo_neto'];
  AdministrativoColumns: string[] = ['name', 'lastname', 'email', 'phone','sueldo_neto'];

  dataClientes = ELEMENT_DATA_CLIENTE;
  dataDoctores = ELEMENT_DATA_DOCTOR;
  dataAdministrativos = ELEMENT_DATA_ADMINISTRATIVO;

  constructor(public dialog: MatDialog, private service:ServiceService, private router:Router) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit() {
    this.access = this.service.getToken("access");
    this.role = this.service.getToken("role");
  }

  closeSession(){
    this.service.logOut();
    this.router.navigate(["log-in"]);
  }
}

