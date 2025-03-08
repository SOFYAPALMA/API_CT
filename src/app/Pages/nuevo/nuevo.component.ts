import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NuuevoService } from '../../Services/nuevo.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { Categorias } from '../../Models/Categorias';
import { CategoriasService } from '../../Services/categorias.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.scss'],
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
    MatSelectModule,
  ],
})
export class NuevoComponent implements OnInit {
  subscription: Subscription = new Subscription();
  authForm!: UntypedFormGroup;

  submitted = false;
  loading = false;
  error = '';
  hide = true;
  dateValidator: any;
  categorias: Categorias[] = [];
  id: number | undefined;
  row: any;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private nuevoService: NuuevoService,
    private categoriasService: CategoriasService
  ) {}

  ngOnInit() {
    this.getCategorias();

    this.authForm = this.formBuilder.group({
      //id: ['', Validators.required],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      fecha_creacion: ['', Validators.required],
      id_categoria: ['', Validators.required],
    });
  }

  get f() { return this.authForm.controls; }

  getCategorias() {
    this.categoriasService.getCategorias().subscribe({
      next: (result: any) => {
        console.log('S3', result);
        if (result.success) {
          this.categorias = result.data;
          console.log('S5', this.categorias);
        } else {
          console.error('Error al cargar categorías:', result.message);
        }
      },
      error: (error: any) => {
        console.error('Error al obtener los datos de categorías:', error);
      },
    });
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;
    this.error = '';

    if (this.authForm.invalid) {
      this.error = 'Error en la creacion de nuevo producto.';
      this.loading = false;
      return;
    } else {
      this.nuevoService.nuevoProducto(this.authForm.value).subscribe({
        next: (response: any) => {
          this.router.navigate(['/inicio']);
        },
        error: () => {
          this.error = 'Error al crear el producto';
          this.loading = false;
        },
      });
    }
  }

  nuevo() {
    this.router.navigate(['/categorias']);
  }

  Guardar() {
    console.log('Guardar');
    this.router.navigate(['/inicio']);
  }
}
