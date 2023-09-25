import { Injectable } from '@angular/core';
import { APersistency } from './a-persistency';
import { ToDoModel } from 'src/app/models/todo-model';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { from, lastValueFrom, map, mapTo, mergeMap, reduce, take, takeLast } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoBrowserDbPersistencyService extends APersistency<ToDoModel> {

  constructor(private dbService: NgxIndexedDBService) {
    super();
    dbService.selectDb("todos");
  }
  override readAll(): Promise<ToDoModel[]> {
    return lastValueFrom(this.dbService.getAll("todos")
      .pipe(
        map<Array<any>, Array<ToDoModel>>(
          (value: any) => value.map((x: any) => new ToDoModel(x.title, x.description, x.id)),)
      )
    );
  }
  override add(value: ToDoModel): Promise<void> {
    return lastValueFrom(this.dbService.add("todos", {title:value.title,description:value.description})).then(() => { });
  }
  override remove(value: ToDoModel): Promise<void> {
    return lastValueFrom(this.dbService.delete("todos", value.id!)).then(() => { });
  }
  override update(value: ToDoModel): Promise<ToDoModel> {
    return lastValueFrom(this.dbService.update("todos", {id:value.id,title:value.title,description:value.description}));
  }

}
