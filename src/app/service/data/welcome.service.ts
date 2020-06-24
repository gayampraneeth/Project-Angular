import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HelloWorld } from '../../app.model';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {

  constructor(private _http: HttpClient) { }

  callWelcome(): Observable<HelloWorld> {
    const myHeader = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
    return this._http.get<HelloWorld>
                ('http://localhost:8080/Hello-World-Bean', {headers: myHeader});
  }

  callWelcomeWithParameter(name): Observable<HelloWorld> {
    return this._http.get<HelloWorld>
                (`http://localhost:8080/Hello-World/WithPathVariable/${name}`);
  }
}
