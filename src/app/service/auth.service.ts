import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  HTTP_URL = "http://localhost:8080/auth";

  constructor(private http : HttpClient) { }

  public register(nuevoUsuario: NuevoUsuario):Observable<NuevoUsuario>{
    return this.http.post<NuevoUsuario>(this.HTTP_URL+"/post",nuevoUsuario);
  }

  public login(loginUsuario:LoginUsuario):Observable<JwtDto>{
    return this.http.post<JwtDto>(this.HTTP_URL+"/login",loginUsuario);
  }

}
