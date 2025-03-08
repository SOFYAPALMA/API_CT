
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { Router } from '@angular/router';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';           
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';  
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import { Categorias } from '../../Models/Categorias'; 
import { CategoriasService } from '../../Services/categorias.service';




@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css',
  standalone: true,
  imports: [
  
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
  ],
})

export class CategoriasComponent implements OnInit {
  subscription: Subscription = new Subscription();
  authForm!: UntypedFormGroup;
 
  submitted = false;
  loading = false;
  error = '';
  hide = true;  
  dateValidator: any;
  categorias: Categorias[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private categoriasService: CategoriasService

  ) {}

  ngOnInit() {

    this.authForm = this.formBuilder.group({
      //id: ['', Validators.required],
      nombre: ['', Validators.required],

    });
  }

  get f() { return this.authForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = '';

   
    if (this.authForm.invalid) {
      this.error = 'Error en la creacion de nueva categoria';
      this.loading = false;
      return;
    } else {  
      this.categoriasService.nuevacategoria(this.authForm.value).subscribe({
        next: (response: any) => {
       
          this.router.navigate(['/nuevo']);
        },
        error: () => {
          this.error = 'Error al crear categoria';
          this.loading = false;
        }
      });   
    }
  }

  Guardar() {
    console.log("Guardar");
    this.router.navigate(['/nuevo']);
  }
}

