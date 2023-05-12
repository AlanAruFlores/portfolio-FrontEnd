import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaServiceService } from 'src/app/service/experiencia-service.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  formularioCrear:boolean = false;
  vacio:boolean = true;
  estaLogeado = false;
  experienciaListas:Experiencia[] = [];

  constructor(private experienciaService:ExperienciaServiceService,private tokenService:TokenService) { }

  ngOnInit(): void {
    this.tenerLista();
    if(this.tokenService.getToken()){
      this.estaLogeado = true;
    }else{
      this.estaLogeado = false;
    }
  }

  public tenerLista():void{
    this.experienciaService.getLista().subscribe((data)=>{this.experienciaListas = data});
  }
  public crearExperiencia(){
    this.formularioCrear=true;
  }
  public cerrarExperiencia(){
    this.formularioCrear=false;
  }
}
