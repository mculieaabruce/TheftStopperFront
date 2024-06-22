import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Reporte01Component } from './reporte01/reporte01.component';

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [RouterOutlet, Reporte01Component],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent implements OnInit {
  constructor(public route: ActivatedRoute) {}
  ngOnInit(): void {}
}
