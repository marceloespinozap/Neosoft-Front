import { Component, OnInit , Input,EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder,  Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ServiciosService} from '../servicios.service';
@Component({
  selector: 'app-imagenes-add',
  templateUrl: './imagenes-add.component.html',
  styleUrls: ['./imagenes-add.component.css'] 
})
export class ImagenesAddComponent implements OnInit {
  imagenForm: FormGroup;
  @Input() recargar: Function;

  status=false;
  title = 'front';
  panelOpenState = false; 
  response: any;
  alertaerror=false;
  alertaok=false;

  constructor(
      private fb: FormBuilder,
      private servicio: ServiciosService,
       
  ) { 
    this.imagenForm = fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      archivo: ['' , [Validators.required]],
     });
  }

  ngOnInit(): void {
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
        this.status=false
      }else{
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