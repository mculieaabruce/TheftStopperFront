import { Ciudadano } from "./ciudadano";



export class alertaMovil{
    id:string='';
    mensaje:string='';
    ubicacion:string='';
    comentario:string='';
    ciudadano:Ciudadano=new Ciudadano();
    fechaalerta:Date=new Date();
    horaalerta:Date=new Date();
}