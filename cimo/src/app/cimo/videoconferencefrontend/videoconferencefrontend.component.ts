import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoconferencefrontend',
  templateUrl: './videoconferencefrontend.component.html',
  styleUrls: ['./videoconferencefrontend.component.css']
})
export class VideoconferencefrontendComponent implements OnInit {

  lista:string[]=["media hora","1 hora","2 horas", "3 horas"];


  constructor() { }

  ngOnInit(): void {
  }

}
