import { alertaMovil } from "./alertaMovil";
import { foro } from "./foro";

export class caso{
    id:number = 0;
    alertaMovil: alertaMovil = new alertaMovil();
    statusCase:string = "";
    commentCase:Date = new Date();
    foro: foro = new foro();
}