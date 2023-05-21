import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaServiceService {

  //HTTP_URL="https://backendportfolio-y0h8.onrender.com/experiencia"
  HTTP_URL="http://localhost:8080/experiencia"
  constructor(private http : HttpClient) { }

  public getLista():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.HTTP_URL}/all`);
  }

  public getExperiencia(id:number):Observable<Experiencia>{
    return this.http.get<Experiencia>(`${this.HTTP_URL}/get?id=${id}`);
  }

  public saveExperiencia(exp : Experiencia) : Observable<any>{
    return this.http.post<any>(`${this.HTTP_URL}/post`,exp);
  }

  public update(id:number , exp:Experiencia):Observable<any>{
    return this.http.post<any>(`${this.HTTP_URL}/update?id=${id}`,exp);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`${this.HTTP_URL}/delete?id=${id}`);
  }
}
