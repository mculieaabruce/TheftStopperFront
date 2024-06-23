import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { caso } from '../Models/caso';
import { HttpClient } from '@angular/common/http';
import { casosAtrasadosDTO } from '../Models/casosAtrasadosDTO';
import { casosXdistritoDTO } from '../Models/casosXdistritoDTO';
import { Observable, Subject } from 'rxjs';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class CasoService {
  private url=`${base_url}/caso`
  private listaCambio = new Subject<caso[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<caso[]>(this.url);
  }
  insert(p:caso){
    return this.httpClient.post(this.url,p);
  }
  setList(listaNueva: caso[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  getsolvedcases(): Observable<casosXdistritoDTO[]>{
    return this.httpClient.get<casosXdistritoDTO[]>(
      `${this.url}/casosresueltoxdistrito`
    )

  }
}
