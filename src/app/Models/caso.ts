import { alertaMovil } from "./alertaMovil";

export class caso{
    id:number = 0;
    alertaMovil: alertaMovil = new alertaMovil();
    estado:string = "";
    comentario:Date = new Date();
    foro: foro = new foro();
}