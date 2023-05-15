import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { HardSkill } from 'src/app/models/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-modificar-hard',
  templateUrl: './modificar-hard.component.html',
  styleUrls: ['./modificar-hard.component.css']
})
export class ModificarHardComponent implements OnInit {

  @Input() skill!:HardSkill;
  @Output() deshabilitarEdicion:EventEmitter<boolean> = new EventEmitter();

  //Atributos de edicion
  nombreSkill:string="";
  rangoSkill: number=0;

  //ValidarFormulario
  forms: FormGroup;
  tieneErrores:boolean = false;

  constructor(private hardService:HardskillService, private builder:FormBuilder) 
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
    this.hardService.updateSkill(this.skill.id!, new HardSkill(this.nombreSkill,this.rangoSkill)).subscribe((date)=>{
      alert("Se actualizo con exito");
      location.reload();
    },error=>{
      alert("Error: El nombre ya existe o verifique los campos");
    })
  }

  }
}
