import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { SoftSkill } from 'src/app/models/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';
@Component({
  selector: 'app-modificar-soft',
  templateUrl: './modificar-soft.component.html',
  styleUrls: ['./modificar-soft.component.css']
})
export class ModificarSoftComponent implements OnInit {

  @Input() skill!:SoftSkill;
  @Output() deshabilitarEdicion:EventEmitter<boolean> = new EventEmitter();

  //Atributos de edicion
  nombreSkill:string="";
  rangoSkill: number=0;

  //ValidarFormulario
  forms: FormGroup;
  tieneErrores:boolean = false;

  constructor(private softService: SoftskillService, private builder:FormBuilder) 
  {
    this.forms = builder.group({
      nombre:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.nombreSkill = this.skill.nombre;
    this.rangoSkill = this.skill.porcentaje;
  }


  public cerrarEdicion(){
    this.deshabilitarEdicion.emit(false);
  }

  public actualizar(){
    if(this.forms.status=="INVALID"){
      this.tieneErrores=true;
    }
  else{
    this.tieneErrores=false;
    this.softService.updateSkill(this.skill.id!, new SoftSkill(this.nombreSkill,this.rangoSkill)).subscribe((date)=>{
      alert("Se actualizo con exito");
      location.reload();
    },error=>{
      alert("Error: El nombre ya existe o verifique los campos");
    })
  }

  }

}
