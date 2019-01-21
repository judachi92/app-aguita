import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.scss']
})
export class RegistroProductosComponent implements OnInit {

  categorias:Categoria[]=[];
  producto:Producto = new Producto();

  productoForm:FormGroup;
  myGroup:FormGroup;

  constructor(private categoriaService:CategoriaService,
    private productoService:ProductoService) {

      this.myGroup = new FormGroup({
        firstName: new FormControl()
     });
     this.productoForm = new FormGroup({
      titulo: new FormControl()
   });
     }

  ngOnInit() {
    this.getCategorias();


      
  }
  /*
  local: this.juegoForm.get('f_local').value,
            visitante: this.juegoForm.get('f_visitante').value,
            fecha: this.juegoForm.get('f_fecha').value,
  */
  getCategorias(): void {
    this.categoriaService.getCategorias()
        .subscribe(categorias => this.categorias = categorias);
  }

  onSubmit(){
      
    console.log(this.producto);
    this.productoService.storeProducto(this.producto).subscribe();
  }
}
