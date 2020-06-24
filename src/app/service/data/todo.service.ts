import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDo } from '../../app.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  getTodos(userName: String): Observable<ToDo[]> {
    return this._http.get<ToDo[]>(`http://localhost:8080/users/${userName}/todos`);
  }

  removeToDo(userName, taskId): Observable<String> {
    return this._http.delete<String>(`http://localhost:8080/users/${userName}/${taskId}`, {responseType: 'text' as 'json'});
  }

  addToDo(userName, todo: ToDo): Observable<String> {
    return this._http.post<String>(`http://localhost:8080/users/${userName}/add`, todo, {responseType: 'text' as 'json'});
  }

  updateTodo(userName, todo: ToDo): Observable<String> {
    return this._http.put<String>(`http://localhost:8080/users/${userName}/update`, todo, {responseType: 'text' as 'json'});
  }
}
