import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { caso } from '../../../../Models/caso';
import { CasoService } from '../../../../Services/caso.service';
import { alertaMovil } from '../../../../Models/alertaMovil';
import { foro } from '../../../../Models/foro';
import { AlertaMovilService } from '../../../../Services/alerta-movil.service';
import { ForoService } from '../../../../Services/foro.service';

@Component({
  selector: 'app-crearcaso',
  standalone: true,
  imports: [MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './crearcaso.component.html',
  styleUrl: './crearcaso.component.css'
})
export class CrearcasoComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  caso: caso = new caso();
  listaAlertas: alertaMovil[] = []
  listaforo:foro[] = []
  listaEstados: { value: string; viewValue: string }[] = [
    { value: 'En Proceso', viewValue: 'En Proceso' },
    { value: 'Etapa Inicial', viewValue: 'Etapa Inicial' },
    { value: 'Finalizado', viewValue: 'Finalizado' },
  ];
  constructor(
    private cS: CasoService,
    private router: Router,
    private formBuilder: FormBuilder,
    private aS: AlertaMovilService,
    private fS: ForoService
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      alerta: ['', Validators.required],
      estado: ['', Validators.required],
      comentario:['',Validators.required],
      foro: [ '', Validators.required ],
    });
    this.aS.list().subscribe((data: alertaMovil[]) => {
      this.listaAlertas = data;
    });
    this.fS.list().subscribe((data: foro[]) => {
      this.listaforo = data;
    });
  }
  aceptar(): void {
    if (this.form.valid) {
      this.caso.alertaMovil = this.form.value.alerta;
      this.caso.statusCase = this.form.value.estado;
      this.caso.commentCase = this.form.value.comentario;
      this.caso.foro=this.form.value.foro;
      this.cS.insert(this.caso).subscribe((data) => {
        this.cS.list().subscribe((data: caso[]) => {
          this.cS.setList(data);
        });
      });

      this.router.navigate(['caso']);
    }
  }
}
