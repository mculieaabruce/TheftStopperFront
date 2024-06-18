import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarcasoComponent } from './listarcaso/listarcaso.component';

@Component({
  selector: 'app-caso',
  standalone: true,
  imports: [RouterOutlet, ListarcasoComponent],
  templateUrl: './caso.component.html',
  styleUrl: './caso.component.css'
})
export class CasoComponent implements OnInit{
  constructor(public route: ActivatedRoute){}
  ngOnInit(): void {
  }
}
