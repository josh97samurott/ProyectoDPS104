import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  user:User;
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/backendcimo/log-in';

  getUser(){
    return this.http.get<User[]>(this.Url);
  }
}
