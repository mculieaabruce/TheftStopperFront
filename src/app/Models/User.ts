import {Role} from "./Role"

export class User{
    id:number = 0;
    username:string = "";
    password:string = "";
    enabled:boolean = false;
    roles:Role[] = [];
}