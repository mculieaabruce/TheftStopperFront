import { Injectable } from '@angular/core';
import { environment } from '../../environments/environments';
import { Ciudadano } from '../Models/ciudadano';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base;

@Injectable({
  providedIn: 'root',
})
export class CiudadanoService {
  private url = `${base_url}/ciudadano`;
  private listaCambio = new Subject<Ciudadano[]>();
  constructor(private httpClient: HttpClient) {}
  list() {
    return this.httpClient.get<Ciudadano[]>(this.url);
  }
  insert(p: Ciudadano) {
    return this.httpClient.post(this.url, p);
  }
  setList(listaNueva: Ciudadano[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.httpClient.get<Ciudadano>(`${this.url}/${id}`);
  }
  update(c: Ciudadano) {
    return this.httpClient.put(this.url, c);
  }
  eliminar(id: number) {
    return this.httpClient.delete(`${this.url}/${id}`);
  }
}
