import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {


  carrito_productos:any[] = [];
  myStorage:any;
  constructor() {
    this.myStorage = window.localStorage;
  }

  ngOnInit() {
   this.refrescarCarrito();
  }

  refrescarCarrito(){
    let carr = JSON.parse(this.myStorage.getItem('carrito'));
    console.log(carr);
    if(carr){
      this.carrito_productos = carr;
      console.log(this.carrito_productos);
    }
  }

  actualizarCarrito($event){
    this.refrescarCarrito();
  }

}
