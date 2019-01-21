import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Producto } from '../models/producto';
import { ProductoService } from '../services/producto.service';



@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.scss']
})
export class DetalleProductosComponent implements OnInit {

  producto:Producto= new Producto();


  constructor(private route: ActivatedRoute,
    private productoService:ProductoService,
    private router: Router) { }

  ngOnInit() {
    this.getProductoDetalles();
  }

  getProductoDetalles(){
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.productoService.getProducto(id)
    .subscribe(data => this.producto = data[0]);
      
  }


  
}
