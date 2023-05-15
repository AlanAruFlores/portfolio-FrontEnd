import { Component, OnInit,Input, Output, EventEmitter} from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
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

  forms:FormGroup;
  tieneErrores:boolean = false;

  constructor(private serviceEducacion:EducacionService, builder:FormBuilder) { 
    this.forms = builder.group({
      nombre:['',Validators.required],
      desc:['',Validators.minLength(1)],
      fI:['',Validators.required],
      fF:['',Validators.required]
    });
  }

  ngOnInit(): void {
    this.nombreEducacion = this.educacion.nombre;
    this.descripcionEducacion = this.educacion.descripcion;
    this.fechaInicio = this.educacion.fechaInicio;
    this.fechaFinalizacion = this.educacion.fechaFinalizacion;
  }

  actualizarEducacion():void{
    if(this.forms.status=="INVALID"){
      this.tieneErrores = true;
    }else{
      this.tieneErrores = false;
      let educacionActualizada:Educacion=new Educacion(this.nombreEducacion,this.descripcionEducacion,this.fechaInicio, this.fechaFinalizacion);

      this.serviceEducacion.update(this.educacion.id,educacionActualizada).subscribe((data)=>{
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
