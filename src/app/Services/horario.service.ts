import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Horario } from '../Models/horario';
import { environment } from '../../environments/environments';


const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private url=`${base_url}/comisaria`
  private listaCambio = new Subject<Horario[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<Horario[]>(this.url);
  }
}
