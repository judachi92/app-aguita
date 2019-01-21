import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categoria } from '../models/categoria';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class CategoriaService {
  
  categoriaUrl = 'http://localhost:8000/api/categorias';
  constructor(private http: HttpClient) { }

  getCategorias (): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.categoriaUrl)
  }
}
