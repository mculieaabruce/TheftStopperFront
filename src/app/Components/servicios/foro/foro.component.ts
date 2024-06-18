import { Component, OnInit } from '@angular/core';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [PublicacionComponent,RouterOutlet],
  templateUrl: './foro.component.html',
  styleUrl: './foro.component.css'
})
export class ForoComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {
  }
}
