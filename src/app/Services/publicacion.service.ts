import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { publicacion } from '../Models/publicacion';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url=environment.base;
@Injectable({
  providedIn: 'root'
})
export class PublicacionService {

  private url=`${base_url}/publicacion`
  private listaCambio = new Subject<publicacion[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<publicacion[]>(this.url);
  }
  insert(p:publicacion){
    return this.httpClient.post(this.url,p);
  }}
