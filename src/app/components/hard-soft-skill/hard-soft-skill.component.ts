import { Component, OnInit } from '@angular/core';
import { HardSkill } from 'src/app/models/hardskill';
import { SoftSkill } from 'src/app/models/softskill';
import { HardskillService } from 'src/app/service/hardskill.service';
import { SoftskillService } from 'src/app/service/softskill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-soft-skill',
  templateUrl: './hard-soft-skill.component.html',
  styleUrls: ['./hard-soft-skill.component.css']
})
export class HardSoftSkillComponent implements OnInit {

  HSkills:HardSkill[]=[];
  SSkills:SoftSkill[]=[];
  crearForm:boolean = false;
  crearFormSoft:boolean = false;


  //Esta Logeado
  estaLogeado:boolean = false;
  constructor(private serviceHSkill:HardskillService, private serviceSSkill:SoftskillService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.serviceHSkill.getSkills().subscribe((data)=>{
      this.HSkills = data;
    });

    this.serviceSSkill.getSkills().subscribe((data)=>{
      this.SSkills=data;
    })

    if(this.tokenService.getToken()){
      this.estaLogeado = true;
    } 
  }

  public crearSkill(){
    this.crearForm=true;
  }
  public cerrarCrearSkill(){
    this.crearForm=false;
  }

  //SOFT SKILLS
  public cerrarCrearSkillSoft(){
    this.crearFormSoft=false;
  }
  public crearSkillSoft(){
    this.crearFormSoft=true;
  }

}
