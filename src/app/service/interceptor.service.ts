import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private tokenService:TokenService) { }


  public intercept(req:HttpRequest<any>, next:HttpHandler):Observable<any>{
    let intrequ=req;
    const TOKEN = this.tokenService.getToken();

    if(TOKEN!=null){
      intrequ = req.clone({
        headers: req.headers.set("Authorization","Bearer"+TOKEN)
      });
    }
    return next.handle(intrequ);
  }
}
export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi: true
}];
