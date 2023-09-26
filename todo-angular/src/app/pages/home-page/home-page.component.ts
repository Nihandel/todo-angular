import { Component, OnInit, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbIconModule, NbListModule } from '@nebular/theme';
import { Observable, timeout } from 'rxjs';
import { ToDoModel } from 'src/app/models/todo-model';
import { TodoPersistenceService } from 'src/app/services/todo-persistence.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [NbListModule, CommonModule, NbCardModule, NbIconModule, NbButtonModule],
  animations: [trigger("onDelete", [
    state("default", style({
      translation: 0,
    })),
    state("delete", style({
      translate: '150%',
      position:'relative',
      overflow:'hidden'
    })),
    transition("default => delete", [
      animate("0.2s"),
    ]),
  ])],
})
export class HomePageComponent implements OnInit {
  public todos$: Observable<ToDoModel[]>;
  public deleting?:ToDoModel;
  constructor(private todoService: TodoPersistenceService) {
    this.todos$ = todoService.todos$;
  }

  ngOnInit(): void {
  }
  async onDelete(item: ToDoModel) {
    this.deleting=item;
    new Promise(resolve => setTimeout(resolve,500)).then(x=>{
      this.todoService.remove(item);
    });
  }
}
