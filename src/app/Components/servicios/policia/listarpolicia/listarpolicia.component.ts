import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Policia } from '../../../../Models/policia';
import { PoliciaService } from '../../../../Services/policia.service';
import { Comisaria } from '../../../../Models/comisaria';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-listarpolicia',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink,
    MatFormFieldModule, MatInputModule, MatButton,MatButtonModule,CommonModule, MatPaginatorModule],
  templateUrl: './listarpolicia.component.html',
  styleUrl: './listarpolicia.component.css'
})
export class ListarpoliciaComponent implements OnInit{
  dataSource:MatTableDataSource<Policia> = new MatTableDataSource()
  displayedColumns: string[] = ['codigo','nombre', 'apellido', 'numPlaca'
  , 'comisaria','horario','accion01','accion02' ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  comisaria:Comisaria= new Comisaria();
  constructor(private pS: PoliciaService, ){}
  ngOnInit(): void {
    this.pS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.pS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  eliminar(id: number) {
    this.pS.eliminar(id).subscribe((data) => {
      this.pS.list().subscribe((data) => {
        this.pS.setList(data);
      });
    });
  }
}
