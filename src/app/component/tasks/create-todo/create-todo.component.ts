import { Component } from '@angular/core';
import { Task } from '../../../model/task';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTODOComponent {

  taskObj : Task = new Task();
  taskArr : Task[] = [];

  addTaskValue : string = '';
  emptyInput: boolean = false;

  constructor(private taskService : TaskService) { }

  createTask() {
    if (!this.isEmpty(this.addTaskValue)) {
      this.emptyInput = false;
      this.taskObj.task_name = this.addTaskValue;
      this.taskService.addTask(this.taskObj).subscribe({
        next: () => this.loadTasks(),
        error: (err) => alert(err)
      });
    } else {
      this.emptyInput = true;
    }
  }

  isEmpty(value: string | Record<string, any> | null | undefined): boolean {
    if (value == null) {
      return true;
    }
    if (typeof value === 'string') {
      return value.trim() === '';
    }
    return false;
  }

  loadTasks() {
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
  }

}
