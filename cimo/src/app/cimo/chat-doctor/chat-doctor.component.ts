import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ServiceService } from '../../Service/service.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-doctor',
  templateUrl: './chat-doctor.component.html',
  styleUrls: ['./chat-doctor.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ChatDoctorComponent implements AfterViewInit {
  title = 'cimo';
  access:string;
  role:string;

  datos=null;
  link_meeting:string;
  commentary_accept:string;
  id_billing:any;

  displayedColumns: string[] = ['name', 'lastname','specialization', 'date', 'start_session', 'duration', 'commentary','state','total'];
  //dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  expandedElement: any | null;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service:ServiceService, private router:Router) { }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.recovery_data();
    this.access = this.service.getToken("access");
    this.role = this.service.getToken("role");
  }

  closeSession(){
    this.service.logOut();
    this.router.navigate(["log-in"]);
  }

  recovery_data(){

    this.service.chat_doctor().subscribe(result =>{
          this.datos=result;   
    });
    //dataSource = this.datos;
    
  }

  aceptarCita(id_bill){
       
    var datos={
      id_doctor:this.service.getToken('id'),
      link_meeting:this.link_meeting,
      commentary:this.commentary_accept,
      id_billing:id_bill
    }
   
    console.log(datos);
    this.service.accept_videoconference(datos).subscribe(result => {
      if(result["access"] == "true"){
        alert("Cita por chat aceptada.");
        
      }
      else{

        alert("Hubo un problema, por favor intentelo de nuevo.");
      }
    });


  }


}


