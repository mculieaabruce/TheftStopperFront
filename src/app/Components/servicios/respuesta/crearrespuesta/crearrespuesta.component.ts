import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormField } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { Respuesta } from '../../../models/respuesta';
import { RespuestaService } from '../../../services/respuesta.service';
import { initZone } from 'zone.js/lib/zone-impl';


@Component({
  selector: 'app-crearrespuesta',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatButtonModule,
    MatButton,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './crearrespuesta.component.html',
  styleUrl: './crearrespuesta.component.css',
})
export class CrearrespuestaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  respuesta: Respuesta = new Respuesta();
  edicion: boolean = false;
  id: number = 0;
  constructor(
    private rS: RespuestaService,
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
      codigo: [''],
      contenido: ['', Validators.required],
      fecha: ['', Validators.required],
      horaCre: ['', Validators.required],
      autor: ['', Validators.required],
    });
  }
  registrar(): void {
    this.respuesta.idRespuesta = this.form.value.codigo;
    this.respuesta.contenido = this.form.value.contenido;
    this.respuesta.fechaCreacion = this.form.value.fecha;
    this.respuesta.horaCreacion = this.form.value.horaCre;
    this.respuesta.autorResp = this.form.value.autor;
    this.rS.insert(this.respuesta).subscribe(() => {
      this.rS.list().subscribe((data) => {
        this.rS.setList(data);
      });
    });
    this.router.navigate(['respuesta']);
  }
  init(): void {
    if (this.edicion) {
      this.rS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          codigo: new FormControl(data.idRespuesta),
          cotenido: new FormControl(data.contenido),
          fecha: new FormControl(data.fechaCreacion),
          horaCre: new FormControl(data.horaCreacion),
          autor: new FormControl(data.autorResp),
        });
      });
    }
  }
}
