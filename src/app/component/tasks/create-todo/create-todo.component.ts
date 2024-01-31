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

  constructor(private taskService : TaskService) { }

  createTask() {
    if (this.addTaskValue.trim() !== '') {
      this.taskObj.task_name = this.addTaskValue;
      this.taskService.addTask(this.taskObj).subscribe({
        next: () => this.loadTasks(),
        error: (err) => alert(err)
      });
    } else {
      alert('Empty input. Please enter a task.');
    }
  }

  loadTasks() {
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
  }

}
