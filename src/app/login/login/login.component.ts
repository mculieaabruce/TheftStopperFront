import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';

interface usuarios{
  user:string
  password:string
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatInputModule,FormsModule,MatButtonModule,MatCardModule,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  form:FormGroup = new FormGroup({})
  constructor(private formbuilder:FormBuilder){}
  ngOnInit(): void {
    this.form=this.formbuilder.group({
      user:['',Validators.required],
      password:['',Validators.required]
  })
  }
}
