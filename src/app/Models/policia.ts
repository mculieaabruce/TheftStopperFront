import { Comisaria } from "./comisaria";
import { Horario } from "./horario";

export class Policia{
    idPolicia:number=0
    nombre:string = ''
    apellido:string = '';
    num_placa:string = '';
    comisaria:Comisaria = new Comisaria()
    horario: Horario = new Horario()
    horarioB: Horario = new Horario()
}
