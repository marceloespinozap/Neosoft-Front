import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {ServiciosService} from '../servicios.service';
import { HttpClientModule } from '@angular/common/http';
import {FormGroup, FormBuilder,  Validators} from '@angular/forms';

@Component({
  selector: 'app-imagenes-listar',
  templateUrl: './imagenes-listar.component.html',
  styleUrls: ['./imagenes-listar.component.css']
})
export class ImagenesListarComponent implements OnInit {
  imagenForm: FormGroup;
  title = 'front';
  panelOpenState = false; 
  response: any;
  alertaerror=false;
  alertaok=false;
  imagenes: any;

  constructor(
    private servicio: ServiciosService,
    httpClient: HttpClientModule,
    private fb: FormBuilder,

  
  ) {
    this.imagenForm = fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      archivo: ['' , [Validators.required]],
     });
   }

 
  ngOnInit(): void {
    this.servicio.imagenesAll().subscribe((data: any) => {this.imagenes = data.data});

  }

update(){
  this.servicio.imagenesAll().subscribe((data: any) => {this.imagenes = data.data});

}


  addImagen(valores){

    const formData = new FormData();
    formData.append('nombre', this.imagenForm.get('nombre').value);
    formData.append('imagen', this.imagenForm.get('archivo').value);

    this.servicio.imagenAdd(formData).subscribe(
      (data) => {this.response = data, console.log(this.response.errors)},
      (error) => 
      {this.alertaerror=true
      },
      () => {
        //console.log(this.response.errors.imagen)
        if (this.response.errors.imagen===undefined){
        this.imagenForm.reset() 
        this.alertaerror=false, 
        this.alertaok=true,
        this.update()
        const file=''

      } else{
      this.alertaerror=true
      this.alertaok=false
      
      }
    })
  
    
    }


    onFileChange(event) {
      if (event.target.files.length > 0) {
        const file = event.target.files[0];
        this.imagenForm.get('archivo').setValue(file);
      }
    }
}



