import { Component, OnInit } from '@angular/core';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Users } from '../../../Models/User';
import { LoginService } from '../../../Services/login.service';

@Component({
  selector: 'app-foro',
  standalone: true,
  imports: [PublicacionComponent,RouterOutlet,FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './foro.component.html',
  styleUrl: './foro.component.css'
})
export class ForoComponent implements OnInit{
  constructor(public route:ActivatedRoute){}
  ngOnInit(): void {
  }
}
