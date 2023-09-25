import { Injectable } from '@angular/core';
import { APersistency } from './a-persistency';
import { ToDoModel } from 'src/app/models/todo-model';

@Injectable({
  providedIn: 'root'
})
export class TodoInMemoryPersistencyService implements APersistency<ToDoModel> {
  constructor() {}
  readAll(): ToDoModel[] {
      return [...this.todos];
  }
  add(value: ToDoModel): void {
      this.todos.push(value);
  }
  remove(value: ToDoModel): void {
      var finded = this.todos.findIndex(x=>x.title == value.title && x.description == value.description);
      this.todos = this.todos.splice(finded,1);
  }
  update(value: ToDoModel): ToDoModel {
      var finded = this.todos.findIndex(x=>x.title == value.title && x.description == value.description);
      this.todos[finded]=value;
      return value;
  }
  private todos = <ToDoModel[]>[
    {title:"Titolone 1",description:"Des"},
    {title:"Titolone 2",description:"Cri"},
    {title:"Titolone 3",description:"Prion"},
];
}
