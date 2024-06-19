import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';

import moment from 'moment';

import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { Ciudadano } from '../../../../Models/ciudadano';
import { CiudadanoService } from '../../../../Services/ciudadano.service';

@Component({
  selector: 'app-creaciudadano',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    NgIf,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './creaciudadano.component.html',
  styleUrl: './creaciudadano.component.css'
})
export class CrearciudadanoComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  ciudadano: Ciudadano = new Ciudadano();

  edicion: boolean = false;
  id: number = 0;

  maxFecha: Date = moment().add(-18, 'years').toDate();


  constructor(
    private cS: CiudadanoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    });
    this.form = this.formBuilder.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNac: ['', Validators.required],
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.ciudadano.DNI = this.form.value.dni;
      this.ciudadano.Nombre = this.form.value.nombre;
      this.ciudadano.Apellido = this.form.value.apellido;
      this.ciudadano.FechaNacimiento = this.form.value.fechaNac;
      this.cS.insert(this.ciudadano).subscribe((data) => {
        this.cS.list().subscribe((data) => {
          this.cS.setList(data);
        });
      });
      this.router.navigate(['servicios/ciudadano']);
    }
  }

  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          dni: new FormControl(data.DNI),
          nombre: new FormControl(data.Nombre),
          apellido: new FormControl(data.Apellido),
          fechaNac: new FormControl(data.FechaNacimiento)
        });
      });
    }
  }
}


