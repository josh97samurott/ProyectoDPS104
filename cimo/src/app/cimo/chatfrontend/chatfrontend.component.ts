import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-chatfrontend',
  templateUrl: './chatfrontend.component.html',
  styleUrls: ['./chatfrontend.component.css']
})
export class ChatfrontendComponent implements OnInit {

  lista:string[]=["media hora","1 hora","2 horas", "3 horas"];

  constructor() { }

  ngOnInit(): void {
  }

}
