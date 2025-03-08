import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../Settings/appsettings';
import { RespuestaAPI } from '../Models/RespuestaAPI';
import { Categorias } from '../Models/Categorias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private http = inject(HttpClient);
  private apiUrl: string = appsettings.apiUrl + 'Categorias';

  constructor(private httpClient: HttpClient) { }

   lista(){
      console.log(this.apiUrl);
      return this.http.get<RespuestaAPI>(this.apiUrl);
    }

    getCategorias() {
      console.log('S2',this.apiUrl + '/ConsultarCategoria');
      return this.http.get<Categorias>(this.apiUrl + '/ConsultarCategoria');
    }

    
  nuevacategoria(value: Categorias) : Observable<RespuestaAPI> {
    console.log(' nuevo 1', value);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return new Observable((subscriber) => {
      this.httpClient
        .post<RespuestaAPI>(
          this.apiUrl + '/CrearCategoria',
           value 
        )
        .subscribe((data: RespuestaAPI) => {
          //some stuff
          console.log('categ service', data);
          subscriber.next(data);
        });
    });
}
}
