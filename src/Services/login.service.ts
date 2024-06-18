import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { User } from '../app/Models/User';

const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private url= `${base_url}/login`;

  constructor(private http:HttpClient) { }
  login(u:User){
    return this.http.post(this.url,u);

  }
  authenticate(username:string, password:string){
    
  }
}
