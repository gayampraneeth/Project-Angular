import { AuthenticationService } from 'src/app/service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  subscr: Subscription;

  constructor(private router: Router, private authService: AuthenticationService) {
    /* Detecting browser refresh with Angular. You need to look at the Angular Router. 
    Specifically to the navigated property.
    This property is false when the router starts and after the first navigation it changes to true. And that’s it. */
    this.subscr = router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          if (!router.navigated) {
            authService.logout();
          }
        }
      }
    )
  }

  ngOnInit(): void {

  }

}
