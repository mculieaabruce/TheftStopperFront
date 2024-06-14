import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgIf } from '@angular/common';
import { ActivatedRoute, Params, Router, RouterLink } from '@angular/router';


import { Policia } from '../../../../Models/policia';
import { Comisaria } from '../../../../Models/comisaria';
import { Horario } from '../../../../Models/horario';
import { PoliciaService } from '../../../../Services/policia.service';
import { ComisariaService } from '../../../../Services/comisaria.service';
import { HorarioService } from '../../../../Services/horario.service';

@Component({
  selector: 'app-crearpolicia',
  standalone: true,
  imports: [
    MatFormField,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    CommonModule,
    RouterLink,
    NgIf,
  ],
  templateUrl: './crearpolicia.component.html',
  styleUrl: './crearpolicia.component.css',
})
export class CrearpoliciaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  policia: Policia = new Policia();
  edicion:boolean = false;
  id:number= 0;
  listaComisarias: Comisaria[] = [];
  listaHorario: Horario[] = [];
  constructor(
    private pS: PoliciaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cS: ComisariaService,
    private hS: HorarioService,
    private route:ActivatedRoute
  ) {}
  ngOnInit(): void {
   this.route.params.subscribe((data:Params)=>{
    this.id=data['id'];
    this.edicion = data['id'] != null;
    this.init();
   })
    this.form = this.formBuilder.group({
      codigo: ['',],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      numPlaca: ['', Validators.required],
      comis: ['', Validators.required],
      hora: ['', Validators.required],
      horaB: ['', Validators.required],
    });
    this.cS.list().subscribe((data) => {
      this.listaComisarias = data;
      console.log(this.listaComisarias)
    });
    this.hS.list().subscribe((data) => {
      this.listaHorario = data;
    });
  }
  registrar():void {
    if (this.form.valid) {
      this.policia.idPolicia = this.form.value.codigo
      this.policia.nombre = this.form.value.nombre;
      this.policia.apellido = this.form.value.apellido;
      this.policia.num_placa = this.form.value.numPlaca;
      this.policia.comisaria = this.form.value.comis;
      this.policia.horario = this.form.value.hora;
      this.policia.horarioB = this.form.value.horaB;
      this.pS.insert(this.policia).subscribe((data: any) => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        });
      });
      this.router.navigate(['policia'])
    }
  }
  init():void{
    if(this.edicion){
      this.pS.listId(this.id).subscribe((data)=>{
        this.form = new FormGroup({
          codigo:new FormControl(data.idPolicia),
          nombre: new FormControl(data.nombre),
          apellido: new FormControl(data.apellido),
          numPlaca: new FormControl(data.num_placa),
          comis: new FormControl(data.comisaria),
          hora: new FormControl(data.horario),
          horaB: new FormControl(data.horarioB)
        })
      })
    }
  }
}
