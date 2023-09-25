import { Component } from '@angular/core';
import { TodoPersistenceService } from './services/todo-persistence.service';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { AddTodoModalComponent } from './components/modals/add-todo-modal/add-todo-modal.component';
import { ToDoModel } from './models/todo-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-angular';
  constructor(private todoService: TodoPersistenceService, private dialogService: NbDialogService) {

  }
  showAddTask() {
    this.dialogService.open(AddTodoModalComponent,)
      .onClose
      .subscribe((value) => {
        var todo = new ToDoModel(value.title, value.description);
        this.todoService.add(todo);
      });
  }
}
