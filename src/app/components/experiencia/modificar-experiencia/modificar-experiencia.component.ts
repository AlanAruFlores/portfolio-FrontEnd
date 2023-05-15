import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modificar-experiencia',
  templateUrl: './modificar-experiencia.component.html',
  styleUrls: ['./modificar-experiencia.component.css']
})
export class ModificarExperienciaComponent implements OnInit {

  //CAMPOS A ACTUALIZAR
  @Input() experiencia!:Experiencia;
  nombreExperiencia!:string;
  descripcionExperiencia!:string;
  fechaInicio!:Date;
  fechaFinalizacion!:Date;


  //VALIDACION FORM
  forms : FormGroup;
  tieneErrores  :boolean= false;
  //Mandare el dato
  @Output() deshabilitarEdicion:EventEmitter<boolean> = new EventEmitter();

  constructor(private serviceExperiencia:ExperienciaServiceService, private builder:FormBuilder) { 
    this.forms = builder.group({
      nombre:['',Validators.required],
      desc:['',Validators.minLength(1)],
      fI:['',Validators.required],
      fF:['',Validators.required]
    });
  }

  ngOnInit(): void {
    // console.log(this.experiencia);
    this.nombreExperiencia = this.experiencia.nombre;
    this.descripcionExperiencia = this.experiencia.descripcion;
    this.fechaInicio = this.experiencia.fechaInicio;
    this.fechaFinalizacion = this.experiencia.fechaFinalizacion;
  }

  actualizarExperiencia():void{
    if(this.forms.status=="INVALID"){
      this.tieneErrores = true;
    }
    else{
      let experienciaActualizada:Experiencia=new Experiencia(this.nombreExperiencia,this.descripcionExperiencia,this.fechaInicio, this.fechaFinalizacion);

      this.serviceExperiencia.update(this.experiencia.id,experienciaActualizada).subscribe((data)=>{
        alert("Actualizado con exito");
        window.location.reload();
      },error=>{
        alert("Error: Existe el nombre a modificar o revise los campos");
      });
  
    }
   
  }

  cerrarEdicion():void{
    this.deshabilitarEdicion.emit(false);
  }

}
