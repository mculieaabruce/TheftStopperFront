import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-listarcaso',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule],
  templateUrl: './listarcaso.component.html',
  styleUrl: './listarcaso.component.css'
})
export class ListarcasoComponent {

}
