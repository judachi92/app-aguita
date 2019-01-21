import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.scss']
})
export class CardProductoComponent implements OnInit {

  @Input('producto')
  producto:Producto;

  @Input('btn_borrar')
  btn_borrar:boolean;

  @Output('onActive')
  estado: EventEmitter<boolean> = new EventEmitter<boolean>();


  carrito_productos:Producto[] = [];
  myStorage:any;
  
  constructor() { }

  ngOnInit() {
    this.myStorage = window.localStorage;
  }

  refrescarCarrito(){
    let carr = JSON.parse(this.myStorage.getItem('carrito'));
    console.log(carr);
    if(carr){
      this.carrito_productos = carr;
      console.log(this.carrito_productos);
    }
  }

  carrito(){

    this.refrescarCarrito();
    
    this.carrito_productos.push(this.producto);
    console.log(this.carrito_productos);

    let data:string = JSON.stringify(this.carrito_productos);
    localStorage.setItem('carrito', data);

    alert('Se ha adicionado correctamente el Articulo al Carrito');
  }

  eliminarCarrito(){
    
    this.refrescarCarrito();
    this.carrito_productos.splice( this.carrito_productos.indexOf(this.producto), 1 );
    console.log(this.carrito_productos);

    let data:string = JSON.stringify(this.carrito_productos);
    localStorage.setItem('carrito', data);

    alert('Se ha eliminado correctamente el Articulo al Carrito');
    this.refrescarCarrito();

    this.estado.emit(true);
  }

  
}
