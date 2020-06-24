import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from 'src/app/app.model';
import { TodoService } from 'src/app/service/data/todo.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { LocalDataService } from 'src/app/service/data/local-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tod',
  templateUrl: './tod.component.html',
  styleUrls: ['./tod.component.css']
})
export class TodComponent implements OnInit, OnDestroy {

  public todo: ToDo;
  private _username: String;
  public errorMsg: String = 'Something worng. Please try agian.';
  public showError = false;

  private _authSubscription: Subscription;

  constructor(private _route: ActivatedRoute, private _router: Router,
    private _todoService: TodoService, private _authService: AuthenticationService,
    private _localDataServ: LocalDataService) { }

  ngOnInit() {
    this._authSubscription = this._authService.userDetails.subscribe(
      response => this._username = response['userName']
    );
    if (this._route.snapshot.params['task'] === 'add') {
      this.todo = new ToDo(0, '', 0);
    } else {
      this.todo = this._localDataServ.toDo;
    }
  }

  cancel() {
    this._router.navigate(['ToDos']);
  }

  save() {
    if (!this.todo.id) {
      this._todoService.addToDo(this._username, this.todo).subscribe(
        response => this.afterSave(response)
      );
    } else {
      this._todoService.updateTodo(this._username, this.todo).subscribe(
        response => this.afterSave(response)

      );
    }

  }

  afterSave(response) {
    if(response === 'Success') {
      this._router.navigate(['ToDos']);
    } else {
      this.showError = true;
    }
  }

  ngOnDestroy(): void {
    this._authSubscription.unsubscribe();
  }

}
