import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RespuestaAPI } from '../Models/RespuestaAPI';
import { Nuevo } from '../Models/Nuevo';
import { Observable } from 'rxjs';
import { Productos } from '../Models/Productos';
import { appsettings } from '../Settings/appsettings';
import { Categorias } from '../Models/Categorias';

@Injectable({
  providedIn: 'root'
})
export class NuuevoService {

  private http = inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + "Productos/CrearProducto";
  
  constructor(private httpClient: HttpClient) { }

  lista(){
    return this.http.get<RespuestaAPI>(this.apiUrl);
  }
  
  nuevoProducto(value: Productos) : Observable<RespuestaAPI> {
        console.log(' nuevo 1', value);
    
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        };
    
        return new Observable((subscriber) => {
          this.httpClient
            .post<RespuestaAPI>(
              this.apiUrl,
               value 
            )
            .subscribe((data) => {
              //some stuff
              console.log('prod service', data);
              subscriber.next(data);
            });
        });
  }

  getProductos() {
    return this.http.get<Nuevo>(this.apiUrl);
  }
}
