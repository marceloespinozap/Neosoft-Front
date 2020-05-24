import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,  Validators} from '@angular/forms';
import {ServiciosService} from '../servicios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comentarioForm: FormGroup;
  response: any;
  id: any;
  imagen: any;
  base64data: any;
  comentarios: any;
  alertaerror=false;
  alertaok=false;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private servicio: ServiciosService
    ) { 
    this.comentarioForm = fb.group({
      comentario: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(1000)]],
     });
  }

  getComentarios(id_imagen){
    this.servicio.comentariosGet(id_imagen).subscribe(
      (data) => {this.comentarios = data, console.log(this.comentarios)},
      (error) => {},
      () => { }

    )}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getComentarios(this.id);
    console.log(this.id)
  }

  addComentario(valores){
    valores.imagen_id=this.id

    this.servicio.comentarioAdd(valores).subscribe(
      (data) => {this.response = data, console.log(this.response)},
      (error) => {this.alertaerror=true},
      () => {
        this.alertaerror=false, 
        this.alertaok=true,
        this.getComentarios(this.id),
        this.comentarioForm.reset() 
      }
    )}
    imageBlobUrl: any;

  
      }
