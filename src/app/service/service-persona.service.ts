import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/Persona';

@Injectable({
  providedIn: 'root'
})

export class ServicePersonaService {
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

  public deletePersona(id:number){
    return this.http.delete(this.HTTP_URL+"/delete/"+id);
  }

  // @PutMapping("/editar/{id}")
  // public String updateUser(@PathVariable("id")Long id,
  //         @RequestParam("nombre")String nombre,
  //         @RequestParam("apellido")String apellido,
  //         @RequestParam("imagen")String imagen){
      
  public editarPersona(id:number, nombre:string, apellido:string, imagen:string){
    return this.http.put(`${this.HTTP_URL}/editar/${id}?nombre=${nombre}&apellido=${apellido}
    &imagen=${imagen}`,null);
  }
}
