import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

//@ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  estaLogeado:boolean = false;
  existeError : boolean = false;

  usuarioLogin!:LoginUsuario;
  nombreUsuario:string="";
  contraseniaUsuario:string="";
  roles:string[] = [];

  errorMensaje!:string;

  constructor(private serviceToken : TokenService, private serviceAuth: AuthService, private router:Router) { }

  ngOnInit(): void {
    const target = document.querySelector('.login-span-dos');
    const writer = new Typewriter(target, {
      loop: false,
      typeColor: '#ff764d',
      cursorColor: 'transparent',
    });
    writer
      .strings(
        700,
        "¡Hola!",
      )
      .start()

  
    const target2 = document.querySelector('.login-span');
    const writer2 = new Typewriter(target2, {
      loop: false,
      typeColor: '#EDEDED',
      cursorColor: '#ff764d'

    });
    writer2
      .strings(
        700,
        "<br>Bienvenido a la<br>seccion del login",
      )
      .start()

      if(this.serviceToken.getToken()){
        this.estaLogeado=true;
        this.existeError = false;
      }

  }

  public ingresar():void{
    this.usuarioLogin = new LoginUsuario(this.nombreUsuario,this.contraseniaUsuario);

    this.serviceAuth.login(this.usuarioLogin).subscribe((element)=>{
      this.estaLogeado=true;
      this.existeError = false;
      this.serviceToken.setUserName(element.nombreUsuario);
      this.serviceToken.setToken(element.token);
      this.serviceToken.setAuthorities(element.authorities);
      this.roles = element.authorities;
      this.router.navigate([""]);
      console.log(element);
    },
    exception=>{
      this.existeError = true;
      this.estaLogeado = false;
      this.errorMensaje= exception.error.mensaje;
    });
    
  }


}
