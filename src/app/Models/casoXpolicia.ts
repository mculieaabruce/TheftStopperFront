import { caso } from "./caso";
import { Policia } from "./policia";

export class casoXpolicia{ //me quede aqui
    idCxP:number = 0;
    caso:caso = new caso();
    policia:Policia = new Policia();
    dateRev:Date = new Date(Date.now());
    statusCxP:string = "";
}