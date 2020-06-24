import { AuthenticationService } from 'src/app/service/authentication.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpInterceptor {

  constructor(private _authService: AuthenticationService) { 

  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const username = this._authService.userDetails1['userName'];
    const pwd = this._authService.userDetails1['passWord'];

    const basicAuthStr = 'Basic ' + window.btoa(username + ':' + pwd);

    request = request.clone({
      setHeaders : {
        Authorization : basicAuthStr
      }
    });

    return next.handle(request);
  }

}
