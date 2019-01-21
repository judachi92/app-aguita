import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../models/categoria';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit {

  constructor(private categoriaService:CategoriaService,
              private productoService:ProductoService,
              private route: ActivatedRoute,
              private router: Router) { }

  categorias:Categoria[]=[];
  productos:Producto[]=[];
  search = '';

  carrito_productos:Producto[] = [];
  myStorage:any;


  displayedColumns: string[] = ['id', 'titulo','descripcion','precio','descuento',
          'fechainicio_descuento','fechafin_descuento','categoria','imagen','acciones'];

  ngOnInit() {
    //this.getCategorias();
    this.myStorage = window.localStorage;
    this.getProductos();
    
  }

  getCategorias(): void {
    this.categoriaService.getCategorias()
        .subscribe(categorias => this.categorias = categorias);
  }
//(click)="applyFilter($event.target.value)"
  getProductos():void{
    this.productoService.getProductos()
    .subscribe(data => this.productos = data);
  }

  carrito(prodcuto:Producto){

    let carr = JSON.parse(this.myStorage.getItem('carrito'));
    console.log(carr);
    if(carr){
      this.carrito_productos = carr;
      console.log(this.carrito_productos);
    }

    this.carrito_productos.push(prodcuto);
    console.log(this.carrito_productos);

    let data:string = JSON.stringify(this.carrito_productos);
    localStorage.setItem('carrito', data);

    alert('Se ha adicionado correctamente el Articulo al Carrito');
  }
  
}
