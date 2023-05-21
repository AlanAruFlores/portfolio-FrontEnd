import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/educacion';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  //HTTP_URL="https://backendportfolio-y0h8.onrender.com/educacion"
  HTTP_URL="http://localhost:8080/educacion"
  constructor(private http:HttpClient) { }

  public getList():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.HTTP_URL}/all`);
  }
  public delete(id:number):Observable<any>{
    return this.http.delete<any>(`${this.HTTP_URL}/delete?id=${id}`);
  }
  public update(id:number,experiencia:Experiencia):Observable<any>{
    return this.http.post<any>(`${this.HTTP_URL}/update?id=${id}`,experiencia);
  }

  public save(experiencia:Experiencia):Observable<any>{
    return this.http.post<any>(`${this.HTTP_URL}/post`,experiencia);
  }
}
