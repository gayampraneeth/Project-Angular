import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _authService: AuthenticationService, private _router: Router) { }

  ngOnInit() {
    this._authService.logout();
  }

  loginBack() {
    this._router.navigate(['login']);
  }

}
