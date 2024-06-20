import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgIf } from '@angular/common';
import { DistritoComponent } from './distrito/distrito.component';
import { LoginService } from '../../Services/login.service';
@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    DistritoComponent,
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    RouterLink,
    NgIf,
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
})
export class ServiciosComponent implements OnInit {
  role: String = '';
  constructor(private loginService: LoginService, public route: ActivatedRoute){}
  ngOnInit(): void {
    console.log(this.role)
  }
  cerrar() {
    sessionStorage.clear();
  }
  verificar() {
    this.role = this.loginService.showRole();
    return this.loginService.verificar();
  }
  isAdmin() {
    return this.role === 'ADMIN';
  }

  isPolicia() {
    return this.role === 'POLICIA';
  }
  
}
