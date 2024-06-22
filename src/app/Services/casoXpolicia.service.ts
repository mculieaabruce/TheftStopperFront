import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { casoXpolicia } from '../Models/casoXpolicia';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class CasoXPolicia {
  private url=`${base_url}/casoXpolicia`
  private listaCambio = new Subject<casoXpolicia[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<casoXpolicia[]>(this.url);
  }
  insert(p:casoXpolicia){
    return this.httpClient.post(this.url,p);
  }
  setList(listaNueva: casoXpolicia[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
}
