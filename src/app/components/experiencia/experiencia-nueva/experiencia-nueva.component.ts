import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';

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

  constructor(private experienciaService:ExperienciaServiceService) { }

  ngOnInit(): void {
  }

  nuevaExperiencia():void{
    let experienciaNueva:Experiencia = new Experiencia(this.nombreExperiencia, this.descripcionExperiencia, this.fechaInic, this.fechaFinalizacion);
    
    this.experienciaService.saveExperiencia(experienciaNueva).subscribe(data=>{
      console.log(data);
    });
    
    this.nombreExperiencia="";
    this.descripcionExperiencia="";
    window.location.reload();

  }
}
