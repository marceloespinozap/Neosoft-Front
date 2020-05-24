import { Component, OnInit,  } from '@angular/core';
import {ServiciosService} from '../servicios.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-imagenes-listar',
  templateUrl: './imagenes-listar.component.html',
  styleUrls: ['./imagenes-listar.component.css']
})
export class ImagenesListarComponent implements OnInit {
  imagenes: any;
  constructor(
    private servicio: ServiciosService,
    httpClient: HttpClientModule,
  
  ) { }

 
  ngOnInit(): void {
    this.servicio.imagenesAll().subscribe((data: any) => {this.imagenes = data.data});

  }
   update(){
    console.log("aaaa")
    this.servicio.imagenesAll().subscribe(
      (data: any) => {this.imagenes = data.data, console.log(data)});

  }
  get FuncionInput() {
    return this.update.bind(this);
}


}
