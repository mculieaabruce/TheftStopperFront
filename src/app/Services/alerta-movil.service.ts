import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { alertaMovil } from '../Models/alertaMovil';
import { environment } from '../../environments/environments';
import { Subject } from 'rxjs';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class AlertaMovilService {
  private url=`${base_url}/alertaMovil`
  private listaCambio = new Subject<alertaMovil[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<alertaMovil[]>(this.url);
  }
  insert(p:alertaMovil){
    return this.httpClient.post(this.url,p);
  }
  setList(listaNueva: alertaMovil[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.httpClient.get<alertaMovil>(`${this.url}/${id}`);
  }
  update(c: alertaMovil) {
    return this.httpClient.put(this.url, c);
  }
}
