import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ServiceService } from '../../../app/Service/service.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-videoconferences',
  templateUrl: './videoconferences.component.html',
  styleUrls: ['./videoconferences.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class VideoconferencesComponent implements AfterViewInit {
  title = 'cimo';
  access:string;
  role:string;

  datos=null;


  displayedColumns: string[] = ['id', 'specialization', 'date', 'start_session', 'duration', 'type','commentary'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  expandedElement: any | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service:ServiceService, private router:Router) {
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    this.recovery_data();
    this.access = this.service.getToken("access");
    this.role = this.service.getToken("role");
  }

  closeSession(){
    this.service.logOut();
    this.router.navigate(["log-in"]);
  }

  recovery_data(){

    var datos={
      id_user:this.service.getToken('id'),
      role:this.service.getToken("role")
    }

    this.service.calender(datos).subscribe(result =>{
          this.datos=result;   
    });
    //dataSource = this.datos;
    
  }

}
