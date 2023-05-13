import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-card-experiencia',
  templateUrl: './card-experiencia.component.html',
  styleUrls: ['./card-experiencia.component.css']
})
export class CardExperienciaComponent implements OnInit {

  modificar:boolean = false;
  estaLogeado:boolean = true;


  @Input() exp !:Experiencia;
  constructor(private serviceExperiencia:ExperienciaServiceService, private tokenService:TokenService){ }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.estaLogeado = true;
    }else{
      this.estaLogeado = false;
    }
  }

  public habilitarModificar(){
    this.modificar = true;
  }
  public desahibilitarModificar(value:boolean){
    this.modificar = value;
  }

  public borrarExperiencia(){
    this.serviceExperiencia.delete(this.exp.id).subscribe((data)=>{
      console.log(data);
    });
    window.location.reload();
  }
}
