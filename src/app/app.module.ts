import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule }    from '@angular/common/http';

import {MatToolbarModule,
        MatButtonModule,
        MatSelectModule,
        MatMenuModule,
        MatTableModule,
        MatFormFieldModule,
        MatCardModule,
        MatDatepickerModule,
        MatInputModule} from '@angular/material/';

import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { RegistroProductosComponent } from './registro-productos/registro-productos.component';

import {FilterPipe} from './pipes/filter.pipe';
import { DetalleProductosComponent } from './detalle-productos/detalle-productos.component';
import { CarritoComponent } from './carrito/carrito.component';
import { CardProductoComponent } from './card-producto/card-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    ListaProductosComponent,
    RegistroProductosComponent,
    DetalleProductosComponent,
    CarritoComponent,
    CardProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,FormsModule,ReactiveFormsModule,
    
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
