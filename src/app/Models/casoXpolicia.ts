import { caso } from "./caso";
import { Policia } from "./policia";

export class casoXpolicia{
    id:number = 0;
    caso:caso = new caso();
    policia:Policia = new Policia();
    fecha_revision:Date = new Date();
    estado:string = "";
}