import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videoconferences',
  templateUrl: './videoconferences.component.html',
  styleUrls: ['./videoconferences.component.css']
})
export class VideoconferencesComponent implements OnInit {

  lista:string[]=["media hora","1 hora","2 horas", "3 horas"];

  constructor() { }

  ngOnInit(): void {
  }

}
