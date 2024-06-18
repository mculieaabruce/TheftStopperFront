import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListaralertaComponent } from "./listaralerta/listaralerta.component";


@Component({
    selector: 'app-alertamovil',
    standalone: true,
    templateUrl: './alertamovil.component.html',
    styleUrl: './alertamovil.component.css',
    imports: [RouterOutlet, ListaralertaComponent,]
})
export class AlertamovilComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {
    
  }
}
