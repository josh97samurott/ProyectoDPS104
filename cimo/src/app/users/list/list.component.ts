import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  position: number;
  name: string;
  lastname: string;
  dui: string;
  email: string;
  role: string; 
  phone: string;
  nationality: string;   
  creation_date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1, 
    name: 'Wilmer', 
    lastname: 'Flores', 
    dui: '001', 
    email: 'email@email.com',
    role: 'admin',
    phone: '555',
    nationality: 'Salvadorian',
    creation_date: '2020-01-01' 
  },
  {
    position: 2, 
    name: 'Wilmer', 
    lastname: 'Flores', 
    dui: '001', 
    email: 'email@email.com',
    role: 'admin',
    phone: '555',
    nationality: 'Salvadorian',
    creation_date: '2020-01-01' 
  },
  {
    position: 2, 
    name: 'Wilmer', 
    lastname: 'Flores', 
    dui: '001', 
    email: 'email@email.com',
    role: 'admin',
    phone: '555',
    nationality: 'Salvadorian',
    creation_date: '2020-01-01' 
  }
  
];


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name','lastname','dui','email','role','phone','nationality','creation_date','actions'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);



  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  }

}
