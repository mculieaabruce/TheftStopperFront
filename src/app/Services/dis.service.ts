import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environments';
import { Dis } from '../Models/dis';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class DisService {
  private url=`${base_url}/distrito`

  constructor(private a:HttpClient) { }
  list(){
    return this.a.get<Dis[]>(this.url);
  } 
}
