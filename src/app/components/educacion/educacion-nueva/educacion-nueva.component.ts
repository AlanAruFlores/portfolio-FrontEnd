import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-educacion-nueva',
  templateUrl: './educacion-nueva.component.html',
  styleUrls: ['./educacion-nueva.component.css']
})
export class EducacionNuevaComponent implements OnInit {

  nombreEducacion!:string;
  descripcionEducacion!:string;
  fechaInic!:Date;
  fechaFinalizacion!:Date;

  //Formulario
  forms:FormGroup;
  tieneErrores:boolean = false;
  constructor(private educacionService:EducacionService, private fBuilder: FormBuilder) {
    this.forms = this.fBuilder.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
      fechaI:['',Validators.required],
      fechaF:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }
  
  nuevaEducacion(){

    if(this.forms.status=="INVALID"){
      this.tieneErrores=true;
    }
    else{
      let nuevaEducacion:Educacion = new Educacion(this.nombreEducacion,this.descripcionEducacion, this.fechaInic, this.fechaFinalizacion);

      this.educacionService.save(nuevaEducacion).subscribe((data)=>{
        console.log(data);
        this.nombreEducacion ="";
        this.descripcionEducacion="";
        this.tieneErrores=false;
        window.location.reload();
      },error=>{
        alert("Error: Ya existe el nombre");
      });
    }
  
  }

}
