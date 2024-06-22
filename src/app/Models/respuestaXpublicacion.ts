import { publicacion } from './publicacion';
import { respuesta } from './respuesta';

export class respuestaXpublicacionDTO {
  idRxP: number = 0;
  respuesta: respuesta = new respuesta();
  publicacion: publicacion = new publicacion();
  titleResponse: string = '';
}
