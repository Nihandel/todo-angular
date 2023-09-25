import { Injectable } from '@angular/core';
import { APersistency } from './persistency/a-persistency';
import { ToDoModel } from '../models/todo-model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoPersistenceService {
  public get todos$(): Observable<ToDoModel[]> {
    return this.todoStreamController.asObservable();
  }
  constructor(private persistency: APersistency<ToDoModel>) {
    persistency.readAll().then((todos) => this.todoStreamController.next(todos));
  }
  public async add(todo: ToDoModel) {
    this.persistency.add(todo);
    this.todoStreamController.next(await this.persistency.readAll());
  }
  public async remove(todo: ToDoModel) {
    this.persistency.remove(todo);
    this.todoStreamController.next(await this.persistency.readAll());
  }
  public async update(todo: ToDoModel) {
    this.persistency.update(todo);
    this.todoStreamController.next(await this.persistency.readAll());
  }
  private todoStreamController = new BehaviorSubject<ToDoModel[]>([]);
}
