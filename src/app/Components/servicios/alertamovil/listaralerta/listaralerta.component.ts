import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { alertaMovil } from '../../../../Models/alertaMovil';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { AlertaMovilService } from '../../../../Services/alerta-movil.service';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listaralerta',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, RouterLink, MatIconModule],
  templateUrl: './listaralerta.component.html',
  styleUrl: './listaralerta.component.css',
})
export class ListaralertaComponent implements OnInit {
  datasource: MatTableDataSource<alertaMovil> = new MatTableDataSource();
  displayedColumns: String[] = [
    'codigo',
    'mensaje',
    'ubicacion',
    'comentario',
    'ciudadano',
    'fecha',
    'accion01'
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private aS: AlertaMovilService) {}
  ngOnInit(): void {
    this.aS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
    });
    this.aS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
      this.datasource.paginator = this.paginator;
    });
  }
}
