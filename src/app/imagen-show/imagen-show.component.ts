import { Component, OnInit, Input } from '@angular/core';
import {ServiciosService} from '../servicios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-imagen-show',
  templateUrl: './imagen-show.component.html',
  styleUrls: ['./imagen-show.component.css']
})
export class ImagenShowComponent implements OnInit {
  @Input('imagen-id') id: string;
  imagen: any;
  constructor(
    private servicio: ServiciosService,
    private route: ActivatedRoute,

  ) { }
  url: string;
  imageBlobUrl: any;
    ngOnInit(): void {
      if(this.id==undefined){
      this.id = this.route.snapshot.paramMap.get('id');
    }
    }

    ngAfterViewInit(){
        this.servicio.imagenGet(this.id).subscribe(
      (data) => {this.imagen = data, console.log(this.imagen)},
      (error) => {console.log(error)},
      () => {this.convertir(this.imagen)}
    )
    console.log(this.id)

  }
  convertir(test: Blob){
    let reader = new FileReader (); 
    reader.addEventListener ( "load" , () => { 
      this.imageBlobUrl = reader.result ; 
    }, false );
  if (test) { 
      reader.readAsDataURL (test); 
    }
    console.log(this.imageBlobUrl) 
  }

}
