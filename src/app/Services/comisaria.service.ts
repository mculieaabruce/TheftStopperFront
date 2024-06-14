import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Comisaria } from '../Models/comisaria';
import { environment } from '../../environments/environments';

const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ComisariaService {
  private url=`${base_url}/comisaria`
  private listaCambio = new Subject<Comisaria[]>()
  constructor(private httpClient:HttpClient) { }
  list(){
    return this.httpClient.get<Comisaria[]>(this.url);
  }
}
