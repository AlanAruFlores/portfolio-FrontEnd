import { Injectable } from '@angular/core';

const K_TOKEN :string = "AuthToken";
const K_USERNAME  :string="AuthUsername";
const K_AUTHORITIES : string = "AuthAuthorities";
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  roles : string[] = [];

  constructor() { }

  public setToken(mytoken:string):void{
    //ELIMINO EL TOKEN QUE SE HAYA GUARDADO, Y ESTABLEZCO EL NUEVO TOKEN 
    window.sessionStorage.removeItem(K_TOKEN);
    window.sessionStorage.setItem(K_TOKEN,mytoken);
  }

  public getToken():string{
    return window.sessionStorage.getItem(K_TOKEN)!;
  }

  public setUserName(myusername:string):void{
    sessionStorage.removeItem(K_USERNAME);
    sessionStorage.setItem(K_USERNAME,myusername);
  }

  public getUserName():string{
    return sessionStorage.getItem(K_USERNAME)!;
  }

  public setAuthorities(myautorithies:string[]):void{
    sessionStorage.removeItem(K_AUTHORITIES);
    sessionStorage.setItem(K_AUTHORITIES, JSON.stringify(myautorithies));
  }

  public getAuthorities():string[]{
    this.roles = [];
    
    if(sessionStorage.getItem(K_AUTHORITIES)){

      JSON.parse(sessionStorage.getItem(K_AUTHORITIES)!).forEach((element:string) => {
        this.roles.push(element);
      });
    }

    return this.roles;
  }

  public closeSession():void{
    sessionStorage.clear();
  }
}
