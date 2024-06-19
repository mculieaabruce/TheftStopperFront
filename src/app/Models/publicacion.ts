import { Users } from "./User";
import { foro } from "./foro";

export class publicacion{
    idPubli:number=0;
    user:Users=new Users();
    descripPubli:string="";
    statusPubli:string="";
    datePubli:Date=new Date();
    foro:foro=new foro();
}