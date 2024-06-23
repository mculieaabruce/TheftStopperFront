import { Component, OnInit } from '@angular/core';
import { publicacion } from '../../../../../Models/publicacion';
import { MatTableDataSource } from '@angular/material/table';
import { PublicacionService } from '../../../../../Services/publicacion.service';
import { CommonModule, NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-listarpubli',
  standalone: true,
  imports: [NgFor, MatCardModule,MatButtonModule,MatIconModule,MatInput,MatFormFieldModule,CommonModule,RouterOutlet,MatButtonModule,MatIconModule,RouterLink],
  templateUrl: './listarpubli.component.html',
  styleUrl: './listarpubli.component.css'
})
export class ListarpubliComponent implements OnInit{
  publicaciones:publicacion[]=[]
  dataSource:MatTableDataSource<publicacion> = new MatTableDataSource()
  constructor(private pS:PublicacionService){}
  ngOnInit(): void {
    this.pS.list().subscribe((data) => {
      this.publicaciones= data;
    });
  }

}
