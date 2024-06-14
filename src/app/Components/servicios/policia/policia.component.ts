import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarpoliciaComponent } from './listarpolicia/listarpolicia.component';

@Component({
  selector: 'app-policia',
  standalone: true,
  imports: [RouterOutlet, ListarpoliciaComponent],
  templateUrl: './policia.component.html',
  styleUrl: './policia.component.css'
})
export class PoliciaComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {}
}
