import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Policia } from '../Models/policia';
import { environment } from '../../environments/environments';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class PoliciaService {
  private url=`${base_url}/policia`
  private listaCambio = new Subject<Policia[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<Policia[]>(this.url);
  }
  insert(p:Policia){
    return this.httpClient.post(this.url,p);
  }
  setList(listaNueva: Policia[]){
    this.listaCambio.next(listaNueva)
  }
  getList(){
    return this.listaCambio.asObservable()
  }
  listId(id: number) {
    return this.httpClient.get<Policia>(`${this.url}/${id}`);
  }
  update(c:Policia) { 
    return this.httpClient.put(this.url, c);
  }
  eliminar(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
