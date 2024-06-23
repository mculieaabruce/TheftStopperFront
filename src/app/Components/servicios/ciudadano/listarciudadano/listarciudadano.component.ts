import { Component, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Ciudadano } from '../../../../Models/ciudadano';
import { CiudadanoService } from '../../../../Services/ciudadano.service';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-listarciudadano',
  standalone: true,
  imports: [MatTableModule,MatIconModule,RouterLink,MatFormFieldModule
  ,MatInputModule,MatPaginatorModule],
  templateUrl: './listarciudadano.component.html',
  styleUrl: './listarciudadano.component.css'
})
export class ListarciudadanoComponent implements OnInit {
  dataSource:MatTableDataSource<Ciudadano> = new MatTableDataSource()
  displayedColumns:String[]=[
    'dni',
    'nombre',
    'apellido',
    'fechaNac'
  ]
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private cS: CiudadanoService) {}
  ngOnInit(): void {
    this.cS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.cS.getList().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data)
      this.dataSource.paginator = this.paginator;
    })
  }
  eliminar(id: number) {
    this.cS.eliminar(id).subscribe((data) => {
      this.cS.list().subscribe((data) => {
        this.cS.setList(data);
      });
    });
  }


}
