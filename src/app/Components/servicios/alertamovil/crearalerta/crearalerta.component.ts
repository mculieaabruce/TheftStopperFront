import {
  NgxMatDatetimePickerModule,
  NgxMatDatetimepicker,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule,
} from '@angular-material-components/datetime-picker';
import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';
import { alertaMovil } from '../../../../Models/alertaMovil';
import { AlertaMovilService } from '../../../../Services/alerta-movil.service';
import { Ciudadano } from '../../../../Models/ciudadano';
import { CiudadanoService } from '../../../../Services/ciudadano.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-crearalerta',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,MatIconModule,
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
    RouterLink,
    NgxMatNativeDateModule,
  ],
  template: `
    <mat-datepicker #picker></mat-datepicker>
    <button (click)="openPicker()">Open Picker</button>
  `,
  templateUrl: './crearalerta.component.html',
  styleUrl: './crearalerta.component.css',
})
export class CrearalertaComponent {
  form: FormGroup = new FormGroup({});
  alerta: alertaMovil = new alertaMovil();
  edicion:boolean = false;
  id:number= 0;
  listaciudadanos: Ciudadano[] = [];
  ubicaciones: { value: string; viewValue: string }[] = [
    { value: 'Chorrillos', viewValue: 'Chorrillos' },
    { value: 'Surco', viewValue: 'Surco' },
    { value: 'San Miguel', viewValue: 'San Miguel' },
    { value: 'Magdalena', viewValue: 'Magdalena' },
  ];
  @ViewChild('picker') picker!: NgxMatDatetimepicker<any>;
  constructor(
    private amS: AlertaMovilService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cS: CiudadanoService,
    private route:ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id = data['id'];
        this.edicion = data['id'] != null;
      this.init();
     })
    this.form = this.formBuilder.group({
      codigo: ['',],
      mensaje: ['', Validators.required],
      ubicacion: ['', Validators.required],
      comentario: ['', Validators.required],
      ciudadano: ['', Validators.required],
      fecha: ['', Validators.required],
    });
    
    this.cS.list().subscribe((data) => {
      this.listaciudadanos = data;
    });
    
  }
  aceptar(): void {
    if (this.form.valid) {
      this.alerta.messAlert = this.form.value.mensaje;
      this.alerta.ubiAlert = this.form.value.ubicacion;
      this.alerta.comentAlert = this.form.value.comentario;
      this.alerta.ciudadano.id = this.form.value.ciudadano;
      this.alerta.alertDate = this.form.value.fecha;
      this.amS.insert(this.alerta).subscribe((data) => {
        this.amS.list().subscribe((data) => {
          this.amS.setList(data);
        });
      });
      this.router.navigate(['/servicios/alertamovil/listar']);
    }
  }
  init(){
    if(this.edicion){
      this.amS.listId(this.id).subscribe((data)=>{
        this.form = new FormGroup({
          codigo:new FormControl(data.idAlert),
          mensaje: new FormControl(data.messAlert),
          ubicacion: new FormControl(data.ubiAlert),
          comentario: new FormControl(data.comentAlert),
          ciudadano: new FormControl(data.ciudadano.id),
          fecha: new FormControl(data.alertDate), 
        })
      })
    }
  }
}
