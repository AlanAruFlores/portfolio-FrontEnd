import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

@Component({
  selector: 'app-modificar-experiencia',
  templateUrl: './modificar-experiencia.component.html',
  styleUrls: ['./modificar-experiencia.component.css']
})
export class ModificarExperienciaComponent implements OnInit {

  @Input() experiencia!:Experiencia;

  //Mandare el dato
  @Output() abierto = new EventEmitter();

  fechaInic!:string;

  constructor(private serviceExperiencia:ExperienciaServiceService) { }

  ngOnInit(): void {
    // console.log(this.experiencia);
    this.fechaInic=this.tenerFechaString();
  }

  actualizarExperiencia():void{
    let experienciaActualizada:Experiencia=new Experiencia(this.experiencia.nombre,this.experiencia.descripcion,this.experiencia.fechaInicio, this.experiencia.fechaFinalizacion);

    this.serviceExperiencia.update(this.experiencia.id,experienciaActualizada).subscribe((data)=>{
      console.log(data);
    });
    window.location.reload();

  }
  tenerFechaString():string{
    return this.experiencia.fechaInicio.getDate()+"-"+this.experiencia.fechaInicio.getMonth()+"-"+this.experiencia.fechaInicio.getFullYear();
  }


}
