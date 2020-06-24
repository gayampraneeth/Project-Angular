import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MyserviceService {

  serviceproperty = 'Value from Service (Service Created)';

  constructor(private http:HttpClient) { 

  }

  showTodayDate() {
    const ndate = new Date();
    return ndate;
  }

  loadDataUsingHttpService(): Observable<Object> {
    return this.http.get('http://jsonplaceholder.typicode.com/users');
  }

}
