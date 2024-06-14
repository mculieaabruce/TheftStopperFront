import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarciudadanoComponent } from './listarciudadano/listarciudadano.component';

@Component({
  selector: 'app-ciudadano',
  standalone: true,
  imports: [RouterOutlet,ListarciudadanoComponent],
  templateUrl: './ciudadano.component.html',
  styleUrl: './ciudadano.component.css'
})
export class CiudadanoComponent implements OnInit {
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {
      
  }

}
