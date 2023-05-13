import { Component, OnInit,Input } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-card-educacion',
  templateUrl: './card-educacion.component.html',
  styleUrls: ['./card-educacion.component.css']
})
export class CardEducacionComponent implements OnInit {

  @Input() educacion!:Educacion;
  modificar:boolean = false;
  estaLogeado:boolean = true;

  constructor(private educacionService:EducacionService ,private tokenService:TokenService) {
  }

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

  public borrarEducacion(){
    this.educacionService.delete(this.educacion.id).subscribe((data)=>{
      console.log(data);
    });
    window.location.reload();
  }
}
