import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import {
  MatTable,
  MatTableDataSource,
  MatTableModule,
} from '@angular/material/table';
import { caso } from '../../../../Models/caso';
import { CasoService } from '../../../../Services/caso.service';

@Component({
  selector: 'app-listarcaso',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
  templateUrl: './listarcaso.component.html',
  styleUrl: './listarcaso.component.css',
})
export class ListarcasoComponent implements OnInit {
  dataSource: MatTableDataSource<caso> = new MatTableDataSource();
  displayedColumns:String[] = ['alerta','estado','comentario','foro']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cS: CasoService) {}
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.cS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
