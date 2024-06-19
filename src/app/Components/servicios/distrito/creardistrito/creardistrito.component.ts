import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { DistritoService } from '../../../../Services/distrito.service';
import { Distrito } from '../../../../Models/distrito';

@Component({
  selector: 'app-creardistrito',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInput,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './creardistrito.component.html',
  styleUrl: './creardistrito.component.css',
})
export class CreardistritoComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  distrito: Distrito = new Distrito();
  constructor(
    private dS: DistritoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      ubigeo: ['', Validators.required],
      codigoPostal: ['', Validators.required],
    });
  }
  registrar(): void {
    if (this.form.valid) {
      this.distrito.nombre = this.form.value.nombre;
      this.distrito.ubigeo = this.form.value.ubigeo;
      this.distrito.codigo_postal = this.form.value.codigoPostal;
      this.dS.insert(this.distrito).subscribe(() => {
        this.dS.list().subscribe((data) => {
          this.dS.setList(data);
        });
      });
      this.router.navigate(['servicios/distrito/listar']);
    }
  }
}
