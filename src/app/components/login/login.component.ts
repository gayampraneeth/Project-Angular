import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  passWord = '';
  isValidUser = true;
  errorMsg = 'Invalid User Name or Password';

  constructor(private router: Router, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  login() {
    if (this.authService.autheticateUser(this.userName, this.passWord)) {
      // this.router.navigateByUrl('/ToDo');
      this.router.navigate(['Home', this.userName]);
    } else {
      this.isValidUser = false;
    }
  }

}
