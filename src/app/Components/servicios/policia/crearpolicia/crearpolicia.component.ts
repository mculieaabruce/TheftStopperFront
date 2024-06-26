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
import { ActivatedRoute, Params, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Policia } from '../../../../Models/policia';
import { Comisaria } from '../../../../Models/comisaria';
import { PoliciaService } from '../../../../Services/policia.service';
import { ComisariaService } from '../../../../Services/comisaria.service';
import { MatIconModule } from '@angular/material/icon';

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
    NgIf,RouterOutlet,
    MatIconModule
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

  horarios: { value: string; viewValue: string }[] = [
    { value: 'Maniana', viewValue: 'Turno Mañana' },
    { value: 'Tarde', viewValue: 'Turno Tarde' },
    { value: 'Noche', viewValue: 'Turno Noche' },
    { value: 'Madrugada', viewValue: 'Turno Madrugada' },
  ];
  constructor(
    private pS: PoliciaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private cS: ComisariaService,
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
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      numPlaca: ['', Validators.required],
      comis: ['', Validators.required],
      horario: ['', Validators.required],
    });
    this.cS.list().subscribe((data) => {
      this.listaComisarias = data;
      console.log(this.listaComisarias)
    });

  }
  registrar():void {
    if (this.form.valid) {
      this.policia.idPolice = this.form.value.codigo
      this.policia.namePolice = this.form.value.nombre;
      this.policia.lastPolice = this.form.value.apellido;
      this.policia.plateNum = this.form.value.numPlaca;
      this.policia.comisaria.idComisaria = this.form.value.comis;
      this.policia.timePolice = this.form.value.horario
      this.pS.insert(this.policia).subscribe((data: any) => {
        this.pS.list().subscribe((data) => {
          this.pS.setList(data);
        });
      });
      this.router.navigate(['/servicios/policia/listar'])
    }
  }
  init(){
    if(this.edicion){
      this.pS.listId(this.id).subscribe((data)=>{
        this.form = new FormGroup({
          codigo:new FormControl(data.idPolice),
          nombre: new FormControl(data.namePolice),
          apellido: new FormControl(data.lastPolice),
          numPlaca: new FormControl(data.plateNum),
          horario: new FormControl(data.timePolice),
          comis: new FormControl(data.comisaria.idComisaria), 
        })
      })
    }
  }
}
