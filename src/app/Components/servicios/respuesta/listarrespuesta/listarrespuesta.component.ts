import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Respuesta } from '../../../models/respuesta';
import { RespuestaService } from '../../../services/respuesta.service';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-listarrespuesta',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink,
    MatFormFieldModule, MatInputModule, MatButtonModule, MatButton],
  templateUrl: './listarrespuesta.component.html',
  styleUrl: './listarrespuesta.component.css'
})
export class ListarrespuestaComponent implements OnInit{
  dataSource:MatTableDataSource<Respuesta> = new MatTableDataSource()
  displayedColumns:String[]=[
    'codigo',
    'contenido',
    'fecha',
    'horaCre',
    'autor',
    'accion01',
    'accion02'
  ]
  constructor(private rS:RespuestaService){}
  ngOnInit(): void {
    this.rS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.rS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.rS.eliminar(id).subscribe((data) => {
      this.rS.list().subscribe((data) => {
        this.rS.setList(data);
      });
    });
  } 
}
