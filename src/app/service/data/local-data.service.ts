import { Injectable } from '@angular/core';
import { ToDo } from '../../app.model';

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  public toDo: ToDo;

  constructor() { }
}
