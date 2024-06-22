import { Users } from './User';

export class respuesta {
  idAnswer: number = 0;
  contentAnswer: String = '';
  dateAnswer: Date = new Date(Date.now());
  user: Users = new Users();
}
