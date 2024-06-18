import { NgxMatDatetimePickerModule, NgxMatDatetimepicker, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import {  MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { alertaMovil } from '../../../../Models/alertaMovil';
import { AlertaMovilService } from '../../../../Services/alerta-movil.service';
import { Ciudadano } from '../../../../Models/ciudadano';
import { CiudadanoService } from '../../../../Services/ciudadano.service';

@Component({
  selector: 'app-crearalerta',
  standalone: true,
  imports: [MatIconModule,
    MatFormFieldModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    NgIf,
    MatNativeDateModule,
    FormsModule,
    MatSelectModule,
    RouterLink
  ],
  template: `
    <mat-datepicker #picker></mat-datepicker>
    <button (click)="openPicker()">Open Picker</button>
  `,
  templateUrl: './crearalerta.component.html',
  styleUrl: './crearalerta.component.css'
})
export class CrearalertaComponent implements OnInit{
  form:FormGroup = new FormGroup({})
  alerta: alertaMovil = new alertaMovil()
  listaCiudadanos: Ciudadano[] = []
  ubicaciones: { value: string; viewValue: string }[] = [
    { value: 'Chorrillos', viewValue: 'Chorrillos' },
    { value: 'Surco', viewValue: 'Surco' },
    { value: 'San Miguel', viewValue: 'San Miguel' },
    { value: 'Magdalena', viewValue: 'Magdalena' },
  ];
  @ViewChild('picker') picker!: NgxMatDatetimepicker<any>;
  constructor(
    private amS:AlertaMovilService,
    private router:Router,
    private formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private cS:CiudadanoService
  ){}
ngOnInit(): void {
  this.form = this.formBuilder.group({
    mensaje: ['', Validators.required],
    comentario: ['', Validators.required],
    ciudadano: ['', Validators.required],
    fecha: ['', Validators.required],
    ubicacion: ['', Validators.required],
  })
  this.picker.open()
  this.cS.list().subscribe((data: Ciudadano[])=>{ this.listaCiudadanos = data})
  }
  aceptar():void{
    if(this.form.valid){
      this.alerta.messAlert = this.form.value.mensaje
      this.alerta.ubiAlert = this.form.value.ubicacion
      this.alerta.comentAlert = this.form.value.comentario
      this.alerta.ciudadano = this.form.value.ciudadano
      this.alerta.alertDate = this.form.value.fecha
      this.amS.insert(this.alerta).subscribe((data)=>{
        this.amS.list().subscribe((data: alertaMovil[])=> {
          this.amS.setList(data)
        })
      })
      this.router.navigate(['alertaMovil'])
    }
  }
}

