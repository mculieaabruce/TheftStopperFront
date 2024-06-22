export class Ciudadano {
  id: number = 0 ;
  dni: string = '';
  nombre: string = '';
  apellido: string = '';
  fecha_nac: Date = new Date(Date.now());
}
