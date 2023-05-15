import { Component, OnInit,Input } from '@angular/core';
import { HardSkill } from 'src/app/models/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-card',
  templateUrl: './hard-card.component.html',
  styleUrls: ['./hard-card.component.css']
})
export class HardCardComponent implements OnInit {

  @Input() skill !:HardSkill;
  editarSkill:boolean = false;

  //Esta logeado
  estaLogeado:boolean = false;
  constructor(private hardService:HardskillService, private tokenService:TokenService) { }


  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.estaLogeado = true;
    }
  }

  public eliminarSkill(){
    this.hardService.deleteSkill(this.skill.id!).subscribe((data)=>{
      alert("Se elimino con exito");
      location.reload();
    })
  }

  public habilitarEdicion():void{
    this.editarSkill = true;
  }
  public desahibilitarModificar(value:boolean):void{
    this.editarSkill = value;
  }
  
}
