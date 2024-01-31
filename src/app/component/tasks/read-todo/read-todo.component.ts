import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../model/task';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-read-todo',
  templateUrl: './read-todo.component.html',
  styleUrl: './read-todo.component.css'
})
export class ReadTODOComponent {

  @Input() task: Task = new Task;
  taskArr : Task[] = [];

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.readAllTask();
  }

  readAllTask() {
    this.taskService.getAllTask().subscribe({
      next: (res) => {
        this.taskArr = res;
      },
      error: (err) => {
        alert("Unable to get list of tasks");
      }
    });
  }

}
