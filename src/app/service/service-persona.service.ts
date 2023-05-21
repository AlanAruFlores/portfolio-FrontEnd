import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})

export class ServicePersonaService {
  //HTTP_URL: string = "https://backendportfolio-y0h8.onrender.com/persona";
  HTTP_URL: string = "http://localhost:8080/persona";
  constructor(private http:HttpClient) { }


  public getPersonas(){
    return this.http.get<Persona[]>(this.HTTP_URL+"/all");
  }


  public getPersonaId(id:number):Observable<Persona>{
    return this.http.get<Persona>(this.HTTP_URL+"/get/"+id);
  }

  public postPersona(obj?:Persona){
    return this.http.post<Persona>(this.HTTP_URL+"/post",obj);
  }


  // @PutMapping("/editar/{id}")
  // public String updateUser(@PathVariable("id")Long id,
  //         @RequestParam("nombre")String nombre,
  //         @RequestParam("apellido")String apellido,
  //         @RequestParam("imagen")String imagen){
      
  public editarPersona(id:number, nombre:string, descripcion:string){
    return this.http.post(`${this.HTTP_URL}/editar/${id}?nombre=${nombre}&descripcion=${descripcion}`,null);
  }
}
