import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RegistroProductosComponent } from './registro-productos/registro-productos.component';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path: 'lista', component: ListaProductosComponent },
  { path: 'registro', component: RegistroProductosComponent },
  { path: 'detalle-producto/:id', component: DetalleProductosComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: '', redirectTo: '/lista', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
