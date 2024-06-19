import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatTableDataSource } from '@angular/material/table';
import { publicacion } from '../../../../Models/publicacion';
import { PublicacionService } from '../../../../Services/publicacion.service';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { MatCommonModule } from '@angular/material/core';

@Component({
  selector: 'app-publicacion',
  standalone: true,
  imports: [NgFor, MatCardModule,MatButtonModule,MatIconModule,MatInput,MatFormFieldModule,CommonModule],
  templateUrl: './publicacion.component.html',
  styleUrl: './publicacion.component.css'
})
export class PublicacionComponent implements OnInit {
  publicaciones:publicacion[]=[]
  dataSource:MatTableDataSource<publicacion> = new MatTableDataSource()
  constructor(private pS: PublicacionService) {}
  ngOnInit(): void {
    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource=new MatTableDataSource(data);
    });
  }
}
