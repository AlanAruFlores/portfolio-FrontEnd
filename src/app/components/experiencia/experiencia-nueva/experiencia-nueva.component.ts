import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';
import {FormGroup, FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-experiencia-nueva',
  templateUrl: './experiencia-nueva.component.html',
  styleUrls: ['./experiencia-nueva.component.css']
})
export class ExperienciaNuevaComponent implements OnInit {
  nombreExperiencia:string="";
  descripcionExperiencia:string="";
  fechaInic:Date=new Date();
  fechaFinalizacion:Date=new Date();


  //FORMULARIO
  tieneErrores:boolean=false;
  forms:FormGroup;

  constructor(private experienciaService:ExperienciaServiceService, private fBuilder: FormBuilder) {
    this.forms = this.fBuilder.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required],
      fechaI:['',Validators.required],
      fechaF:['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  nuevaExperiencia():void{
    if(this.forms.status=="INVALID"){
      this.tieneErrores = true;
    }
    else{
      let experienciaNueva:Experiencia = new Experiencia(this.nombreExperiencia, this.descripcionExperiencia, this.fechaInic, this.fechaFinalizacion);
        
      this.experienciaService.saveExperiencia(experienciaNueva).subscribe(data=>{
        console.log(data);
        this.nombreExperiencia="";
        this.descripcionExperiencia="";
        window.location.reload();
      },error=>{
        alert("Error: El nombre de la experiencia ya existe");
      });


    }
  }
}
