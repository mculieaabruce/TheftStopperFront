import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DistritoService } from '../../../../Services/distrito.service';
import { Distrito } from '../../../../Models/distrito';
@Component({
  selector: 'app-listardistrito',
  standalone: true,
  imports: [MatTableModule, MatIconModule, RouterLink,
     MatFormFieldModule, MatInputModule],
  templateUrl: './listardistrito.component.html',
  styleUrl: './listardistrito.component.css'
})
export class ListardistritoComponent implements OnInit{
  dataSource:MatTableDataSource<Distrito> = new MatTableDataSource()
  displayedColumns:String[]=[
    'nombre',
    'ubigeo',
    'codigoPostal'
  ]
  constructor(private dS: DistritoService) {}
  ngOnInit(): void {
    this.dS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.dS.getList().subscribe((data)=>{
      this.dataSource = new MatTableDataSource(data)
    })
  }
}
