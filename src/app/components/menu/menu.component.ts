import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {

  public user;
  subsc: Subscription;
  
  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.subsc = this._authenticationService.userDetails.subscribe(
      response => this.user = response['userName']
    );
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }

}
