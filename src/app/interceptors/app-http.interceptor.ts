import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(!request.url.includes("login"))
  {   let newReq=request.clone(
    {
      headers:request .headers.set("Authorization","Bearer "+this.authService.accessToken)
    }
  );
  return next.handle(newReq).pipe(

    catchError(err=>{

      if(err.status==401)
      this.authService.logout()
      return throwError(new Error(err.message))
    })
  );

}
return next.handle(request);

  }
}
