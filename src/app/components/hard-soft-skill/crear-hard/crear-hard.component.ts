import { Component, OnInit } from '@angular/core';
import { HardSkill } from 'src/app/models/hardskill';
import { HardskillService } from 'src/app/service/hardskill.service';

@Component({
  selector: 'app-crear-hard',
  templateUrl: './crear-hard.component.html',
  styleUrls: ['./crear-hard.component.css']
})
export class CrearHardComponent implements OnInit {

  valorRango : number = 0;
  nombreSkill : string = "";

  constructor(private hardService:HardskillService) { }

  ngOnInit(): void {
  }

  public crearSkill():void{
    this.hardService.postSkill(new HardSkill(this.nombreSkill,this.valorRango)).subscribe((data)=>{
      this.valorRango=0;
      this.nombreSkill="";
    });
    location.reload();
    alert("Se creo con exito el usuario");
  }

}
