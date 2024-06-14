import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Respuesta } from '../Models/respuesta';
import { environment } from '../../environments/environments';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class RespuestaService {
  private url=`${base_url}/respuesta`
  private listaCambio = new Subject<Respuesta[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<Respuesta[]>(this.url);
  }
  insert(p:Respuesta){
    return this.httpClient.post(this.url,p);
  }
  setList(listaNueva: Respuesta[]){
    this.listaCambio.next(listaNueva)
  }
  getList(){
    return this.listaCambio.asObservable()
  }
  listId(id: number) {
    return this.httpClient.get<Respuesta>(`${this.url}/${id}`);
  }
  update(c:Respuesta) { 
    return this.httpClient.put(this.url, c);
  }
  eliminar(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
