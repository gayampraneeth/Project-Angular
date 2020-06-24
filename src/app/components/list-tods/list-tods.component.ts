import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from 'src/app/app.model';
import { TodoService } from 'src/app/service/data/todo.service';
import { LocalDataService } from 'src/app/service/data/local-data.service';

@Component({
  selector: 'app-list-tods',
  templateUrl: './list-tods.component.html',
  styleUrls: ['./list-tods.component.css']
})
export class ListTodsComponent implements OnInit {
  params: any;
  todos: ToDo[] = [];

  columnsToDisplay = ['taskName', 'noOfDays','update', 'delete' ]

  constructor(private _todoService: TodoService, private _localDataServ: LocalDataService,
    private _route: ActivatedRoute, private _router: Router) {
    
    this._route.parent.params.subscribe(
      params => {
        this.params = params['name'];
      }
    );
  }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this._todoService.getTodos(this.params).subscribe(
      response => this.displayToDos(response)
    );
  }
  
  removeTodo(todo: ToDo) {
    this._todoService.removeToDo(this.params, todo.id).subscribe(
      (response) => {
        if (response === 'Success') {
          this.getTodos();
        } else {

        }
      },
      (error) => {

      }
    );
  }

  addTodo() {
    this._router.navigate(['ToDos', 'add']);
  }

  updateTodo(todo: ToDo) {
    this._localDataServ.toDo = todo;
    this._router.navigate(['ToDos', 'update']);
  }

  displayToDos(response: ToDo[]): void {
    this.todos = response;
  }

}
