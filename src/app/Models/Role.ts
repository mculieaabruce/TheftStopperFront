import { User } from "./User";

export class Role{
    id:number = 0;
    rol:string = "";
    user:User[] =[];
    enabled:boolean = false;
}