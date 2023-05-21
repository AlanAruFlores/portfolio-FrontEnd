import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HardSkill } from '../models/hardskill';

@Injectable({
  providedIn: 'root'
})
export class HardskillService {
  HTTP_URL:string = "https://backendportfolio-y0h8.onrender.com/hs";
  //HTTP_URL:string = "http://localhost:8080/hs";
  constructor(private http: HttpClient) { }

  public getSkills():Observable<HardSkill[]>{
    return this.http.get<HardSkill[]>(`${this.HTTP_URL}/all`);
  }

  public postSkill(skill:HardSkill):Observable<any>{
    return this.http.post<any>(`${this.HTTP_URL}/post`,skill);
  }

  public deleteSkill(id:number):Observable<any>{
    return this.http.delete<any>(`${this.HTTP_URL}/delete?id=${id}`);
  }

  public updateSkill(id:number , skill:HardSkill):Observable<any>{
    return this.http.post<any>(`${this.HTTP_URL}/update?id=${id}`,skill);
  }
}
