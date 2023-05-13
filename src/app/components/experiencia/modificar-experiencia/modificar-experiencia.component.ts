import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

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

  //Mandare el dato
  @Output() deshabilitarEdicion:EventEmitter<boolean> = new EventEmitter();

  constructor(private serviceExperiencia:ExperienciaServiceService) { 

  }

  ngOnInit(): void {
    // console.log(this.experiencia);
    this.nombreExperiencia = this.experiencia.nombre;
    this.descripcionExperiencia = this.experiencia.descripcion;
    this.fechaInicio = this.experiencia.fechaInicio;
    this.fechaFinalizacion = this.experiencia.fechaFinalizacion;
  }

  actualizarExperiencia():void{
    let experienciaActualizada:Experiencia=new Experiencia(this.nombreExperiencia,this.descripcionExperiencia,this.fechaInicio, this.fechaFinalizacion);

    this.serviceExperiencia.update(this.experiencia.id,experienciaActualizada).subscribe((data)=>{
      console.log(data);
    });
    this.cerrarEdicion();
    window.location.reload();
  }

  cerrarEdicion():void{
    this.deshabilitarEdicion.emit(false);
  }

}
