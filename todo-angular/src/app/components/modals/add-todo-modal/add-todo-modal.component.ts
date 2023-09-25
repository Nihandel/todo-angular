import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NbCardModule, NbDialogRef } from '@nebular/theme';
import { ToDoModel } from 'src/app/models/todo-model';

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.scss'],
})
export class AddTodoModalComponent implements OnInit {
  public model = <AddModel>{};
  constructor(protected dialogRef: NbDialogRef<any>) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    this.dialogRef.close(this.model);
  }
}
interface AddModel {
  title?: String;
  description?: String;
}