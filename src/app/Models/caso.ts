import { alertaMovil } from "./alertaMovil";
import { foro } from "./foro";

export class caso{
    idCase:number = 0;
    alertaMovil: alertaMovil = new alertaMovil();
    statusCase:string = "";
    commentCase:Date = new Date(Date.now());
    foro: foro = new foro();
}