import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbIconModule, NbListModule } from '@nebular/theme';
import { Observable } from 'rxjs';
import { ToDoModel } from 'src/app/models/todo-model';
import { TodoPersistenceService } from 'src/app/services/todo-persistence.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone:true,
  imports: [NbListModule, CommonModule, NbCardModule, NbIconModule, NbButtonModule]
})
export class HomePageComponent implements OnInit {
  public todos$:Observable<ToDoModel[]>;
  constructor(private todoService: TodoPersistenceService) {
    this.todos$ = todoService.todos$;
   }

  ngOnInit(): void {
  }
  onDelete(item:ToDoModel){
    this.todoService.remove(item);
  }
}
