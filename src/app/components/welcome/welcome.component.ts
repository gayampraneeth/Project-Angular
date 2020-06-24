import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WelcomeService } from 'src/app/service/data/welcome.service';
import { HelloWorld } from 'src/app/app.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  welcomeMsg: String;
  welcomeMsgWithName: String;
  params: any;

  //paramsSub: Subscription;
  welcomeSerSub: Subscription;
  welcomeSerParamsSub: Subscription;

  constructor(private _welcomeService: WelcomeService,
    private _route: ActivatedRoute) { 
      
      /* this.paramsSub = this._route.parent.params.subscribe(
        params => {
          this.params = params['name'];
        }
      ); */

      this.params = this._route.snapshot.params['name']
    }

  ngOnInit() {
    this.welcomeSerSub = this._welcomeService.callWelcome()
      .subscribe(
        (response: HelloWorld) => this.displayWelcome(response),
        (error) => this.displayError(error)
      );

    this.welcomeSerParamsSub = this._welcomeService.callWelcomeWithParameter(this.params).subscribe(
        response => this.displayWelcomeWithName(response)
      );
  }
  displayError(error: any): void {
    this.welcomeMsg = error.error.message;
  }
  displayWelcome(response: HelloWorld): void {
    this.welcomeMsg = response.message;
  }
  displayWelcomeWithName(response: HelloWorld): void {
    this.welcomeMsgWithName = response.message;
  }

  ngOnDestroy() {
    //this.paramsSub.unsubscribe();
    this.welcomeSerSub.unsubscribe();
    this.welcomeSerParamsSub.unsubscribe();
  }

}
