import { foro } from "./foro";

export class publicacion{
    id:number=0;
    autorpubli:string='';
    descripcion:string='';
    estado:string='';
    fechacreacion:Date=new Date();
    horacreacion:Date=new Date();
    foro_id:foro=new foro();
}