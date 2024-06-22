import { Users } from './User';
import { foro } from './foro';

export class publicacion {
  idPubli: number = 0;
  descripPubli: string = '';
  datePubli: Date = new Date(Date.now());
  user: Users = new Users();
  statusPubli: string = '';
  foro: foro = new foro();
}
