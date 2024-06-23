import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Users } from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url=`${base_url}/usuarios`
  private listaCambio = new Subject<Users[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<Users[]>(this.url);
  }
  insert(u:Users){
    return this.httpClient.post(this.url,u);
  }
}
