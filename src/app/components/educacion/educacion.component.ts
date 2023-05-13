import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  educacionLista:Educacion[]=[];
  vacio:boolean = false;
  
  //ABRIR FORMULARIO CREACION
  formularioCrear : boolean = false;
  estaLogeado:boolean = false;
  constructor(private educacionService:EducacionService, private tokenService:TokenService) { }


  ngOnInit(): void {
    this.tenerLista();
    if(this.tokenService.getToken()){
      this.estaLogeado = true;
    }else{
      this.estaLogeado = false;
    }

  }
  public tenerLista(){
    this.educacionService.getList().subscribe((data)=>{
      this.educacionLista = data;
    })
  }

  public crearEducacion(){
    this.formularioCrear=true;
  }
  public cerrarEducacion(){
    this.formularioCrear=false;
  }
}
