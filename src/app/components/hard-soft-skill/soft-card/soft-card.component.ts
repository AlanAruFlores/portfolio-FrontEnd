import { Component, OnInit, Input} from '@angular/core';
import { SoftSkill } from 'src/app/models/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-soft-card',
  templateUrl: './soft-card.component.html',
  styleUrls: ['./soft-card.component.css']
})
export class SoftCardComponent implements OnInit {


  @Input() skill !: SoftSkill; 
  editarSkill:boolean =false;

  //Ver Logeado
  estaLogeado:boolean = false;
  constructor(private softService:SoftskillService, private tokenService : TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.estaLogeado = true;
    }
  }

  habilitarEdicion(){
    this.editarSkill = true;
  }
  eliminarSkill(){
    this.softService.deleteSkill(this.skill.id!).subscribe((data)=>{
      alert("Se elimino con exito");
      location.reload();
    })
  }

  public desahibilitarModificar(value:boolean):void{
    this.editarSkill = value;
  }
}
