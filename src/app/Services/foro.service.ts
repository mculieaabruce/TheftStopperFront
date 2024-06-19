import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Subject } from 'rxjs';
import { foro } from '../Models/foro';
import { HttpClient } from '@angular/common/http';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ForoService {

  private url=`${base_url}/foro`
  private listaCambio = new Subject<foro[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<foro[]>(this.url);
  }
  insert(p:foro){
    return this.httpClient.post(this.url,p);
  }
  setList(listaNueva: foro[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
}
