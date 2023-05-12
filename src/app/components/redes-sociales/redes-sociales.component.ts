import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {
  estaLogeado:boolean=false;
  constructor(private router:Router, private tokenService:TokenService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("AuthToken")!=null){
      this.estaLogeado = true;
    }
  }

  public irLogin(){
    this.router.navigate(["/login"]);
  }
  public logOut(){
    this.estaLogeado = false;
    this.tokenService.closeSession();   
    window.location.reload(); 
  }
}
