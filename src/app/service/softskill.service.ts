import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { SoftSkill } from '../models/softskill';

@Injectable({
  providedIn: 'root'
})
export class SoftskillService {
  HTTP_URL:string = "https://backendportfolio-y0h8.onrender.com/ss";
  //HTTP_URL:string = "http://localhost:8080/ss";
  constructor(private http:HttpClient) { }

  public getSkills():Observable<SoftSkill[]>{
    return this.http.get<SoftSkill[]>(`${this.HTTP_URL}/all`);
  }
  public postSkill(skill:SoftSkill):Observable<any>{
    return this.http.post<any>(`${this.HTTP_URL}/post`,skill);
  }

  public deleteSkill(id:number):Observable<any>{
    return this.http.delete<any>(`${this.HTTP_URL}/delete?id=${id}`);
  }

  public updateSkill(id:number , skill:SoftSkill):Observable<any>{
    return this.http.post<any>(`${this.HTTP_URL}/update?id=${id}`,skill);
  }
}
