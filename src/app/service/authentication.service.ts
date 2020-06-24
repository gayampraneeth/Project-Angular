import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public userDetails: Subject<Object> = new Subject();
  public userDetails1 = new Object();

  constructor() { }

  autheticateUser(userName: string, passWord: string): Boolean {
    if (userName === 'pra' && passWord === 'pra') {
      sessionStorage.setItem('authUser', userName);
      let obj: Object = new Object();
      obj['userName'] = userName;
      obj['passWord'] = passWord;
      this.userDetails.next(obj);
      this.userDetails1['userName'] = userName;
      this.userDetails1['passWord'] = passWord;
      return true;
    }
    return false;
  }

  isLoggedin(): Boolean {
    if (sessionStorage.getItem('authUser')) {
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('authUser');
  }
}
