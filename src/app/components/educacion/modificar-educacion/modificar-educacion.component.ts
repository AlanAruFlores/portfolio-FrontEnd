import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-modificar-educacion',
  templateUrl: './modificar-educacion.component.html',
  styleUrls: ['./modificar-educacion.component.css']
})
export class ModificarEducacionComponent implements OnInit {

  //CAMPOS A ACTUALIZAR
  @Input() educacion!:Educacion;
  nombreEducacion!:string;
  descripcionEducacion!:string;
  fechaInicio!:Date;
  fechaFinalizacion!:Date;

  //Mandare el dato
  @Output() deshabilitarEdicion:EventEmitter<boolean> = new EventEmitter();

  constructor(private serviceEducacion:EducacionService) { 

  }

  ngOnInit(): void {
    this.nombreEducacion = this.educacion.nombre;
    this.descripcionEducacion = this.educacion.descripcion;
    this.fechaInicio = this.educacion.fechaInicio;
    this.fechaFinalizacion = this.educacion.fechaFinalizacion;
  }

  actualizarEducacion():void{
    let educacionActualizada:Educacion=new Educacion(this.nombreEducacion,this.descripcionEducacion,this.fechaInicio, this.fechaFinalizacion);

    this.serviceEducacion.update(this.educacion.id,educacionActualizada).subscribe((data)=>{
      console.log(data);
    });

    this.cerrarEdicion();
    window.location.reload();
  }

  cerrarEdicion():void{
    this.deshabilitarEdicion.emit(false);
  }

}
