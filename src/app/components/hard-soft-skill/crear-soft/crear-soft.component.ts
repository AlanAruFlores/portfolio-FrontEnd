import { Component, OnInit } from '@angular/core';
import { SoftSkill } from 'src/app/models/softskill';
import { SoftskillService } from 'src/app/service/softskill.service';

@Component({
  selector: 'app-crear-soft',
  templateUrl: './crear-soft.component.html',
  styleUrls: ['./crear-soft.component.css']
})
export class CrearSoftComponent implements OnInit {

  valorRango : number = 0;
  nombreSkill : string = "";

  constructor(private softService:SoftskillService) { }

  ngOnInit(): void {
  }

  public crearSkill():void{
    this.softService.postSkill(new SoftSkill(this.nombreSkill,this.valorRango)).subscribe((data)=>{
      this.valorRango=0;
      this.nombreSkill="";
    });
    location.reload();
    alert("Se creo con exito el usuario");
  }
}
