import { NgxMatDatetimePickerModule, NgxMatDatetimepicker, NgxMatNativeDateModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { foro } from '../../../../../Models/foro';
import { Users } from '../../../../../Models/User';
import { PublicacionService } from '../../../../../Services/publicacion.service';
import { ForoService } from '../../../../../Services/foro.service';
import { publicacion } from '../../../../../Models/publicacion';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../../../../../Services/user.service';

@Component({
  selector: 'app-crearpubli',
  standalone: true,
  imports: [MatIconModule,MatCardModule,
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
    NgxMatNativeDateModule],
    template: `
    <mat-datepicker #picker></mat-datepicker>
    <button (click)="openPicker()">Open Picker</button>
  `,
  templateUrl: './crearpubli.component.html',
  styleUrl: './crearpubli.component.css'
})
export class CrearpubliComponent implements OnInit{
  publicacion:publicacion= new publicacion()
  form:FormGroup = new FormGroup({})
  forum:foro[]=[];
  autor:Users[]=[];
  estados:{value:string;viewvalue:string}[]=[
    {value:'Resuelto',viewvalue:'Resuelto'},
    {value:'Pendiente',viewvalue:'Pendiente'},
    {value:'Revision',viewvalue:'Revision'},
  ]
  @ViewChild('picker') picker!: NgxMatDatetimepicker<any>;
  constructor(private cps:PublicacionService,private router:Router,private formBuilder:FormBuilder,private fS:ForoService,private uS:UserService){}
  ngOnInit(): void {
    this.form=this.formBuilder.group({
      fechacreacion:['',Validators.required],
      descripcion:['',Validators.required],
      estado:['',Validators.required],
      foroid:['',Validators.required],
      autorid:['',Validators.required],
    })
    this.uS.list().subscribe((data)=>(this.autor=data))
    this.fS.list().subscribe((data)=>{this.forum=data})
  }
  aceptar():void{
    if(this.form.valid){
      this.publicacion.datePubli=this.form.value.fechacreacion,
      this.publicacion.descripPubli=this.form.value.descripcion,
      this.publicacion.statusPubli=this.form.value.estado,
      this.publicacion.foro.nombreForo=this.form.value.foroid,
      this.publicacion.user.username=this.form.value.autorid
      this.cps.insert(this.publicacion).subscribe((data)=>{
        this.cps.list().subscribe((data)=>{
          this.cps.setlist(data)
        })
      })
      this.router.navigate(['/foro/publicacion/listar'])
    }
  }
}
