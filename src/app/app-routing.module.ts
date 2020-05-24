import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComentariosComponent } from './comentarios/comentarios.component';
import {ImagenesListarComponent } from './imagenes-listar/imagenes-listar.component';
import {ImagenShowComponent } from './imagen-show/imagen-show.component';
const routes: Routes = [
  { path: '', component: ImagenesListarComponent },
  { path: 'comentarios/:id', component: ComentariosComponent },
  { path: ':id', component: ImagenShowComponent },
  { path: '**', component: ImagenesListarComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }