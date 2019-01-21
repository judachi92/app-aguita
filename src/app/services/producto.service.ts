import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Producto } from '../models/producto';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  productoUrl = 'http://localhost:8000/api/productos';

  httpOptions = {
    headers: new HttpHeaders({
      'content-type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getProductos (): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productoUrl)
  }

  
  storeProducto (body: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.productoUrl, body, this.httpOptions);
  }

  getProducto(id:string): Observable<Producto> {
    return this.http.get<Producto>(this.productoUrl+'/'+id)
  }
  
}
