import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagenesListarComponent } from './imagenes-listar/imagenes-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ImagenesAddComponent } from './imagenes-add/imagenes-add.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ImagenShowComponent } from './imagen-show/imagen-show.component'

@NgModule({
  declarations: [
    AppComponent,
    ImagenesListarComponent,
    ImagenesAddComponent,
    ComentariosComponent,
    ImagenShowComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
