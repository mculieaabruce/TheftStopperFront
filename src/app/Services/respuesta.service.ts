import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environments';
import { respuesta } from '../Models/respuesta';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class RespuestaService {
  private url=`${base_url}/respuesta`
  private listaCambio = new Subject<respuesta[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<respuesta[]>(this.url);
  }
  insert(p:respuesta){
    return this.httpClient.post(this.url,p);
  }
  setList(listaNueva: respuesta[]){
    this.listaCambio.next(listaNueva)
  }
  getList(){
    return this.listaCambio.asObservable()
  }
  listId(id: number) {
    return this.httpClient.get<respuesta>(`${this.url}/${id}`);
  }
  update(c:respuesta) { 
    return this.httpClient.put(this.url, c);
  }
  eliminar(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
