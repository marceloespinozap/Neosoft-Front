import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }



  imagenesAll() {
    const urlApi = 'http://localhost:8000/api/imagenes';
    return this.http.get(urlApi);
  }
  imagenAdd(imagen){
      return this.http.post('http://localhost:8000/api/imagen', imagen);
    
  }
  imagenGet(id){
    return this.http.get('http://localhost:8000/api/file/'+id, { responseType: 'blob' });
  
}

  comentarioAdd(comentario){
    return this.http.post('http://localhost:8000/api/comentario/new', comentario);
  }
  comentariosGet(id_imagen){
    return this.http.get('http://localhost:8000/api/comentarios/'+id_imagen);

  }
}