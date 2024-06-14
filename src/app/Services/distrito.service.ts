import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { Distrito } from '../Models/distrito';
import { environment } from '../../environments/environments';


const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  private url=`${base_url}/distrito`
  private listaCambio = new Subject<Distrito[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<Distrito[]>(this.url);
  }
  insert(p:Distrito){
    return this.httpClient.post(this.url,p);
  }
  setList(listaNueva: Distrito[]){
    this.listaCambio.next(listaNueva)
  }
  getList(){
    return this.listaCambio.asObservable()
  }
}
