import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { TaskService } from '../../service/task.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  taskObj : Task = new Task();
  taskArr : Task[] = [];

  addTaskValue : string = '';
  editTaskValue : string = '';

  constructor(private taskService : TaskService) { }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks() {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }

  getAllTask() {
    this.taskService.getAllTask().subscribe({
      next: (res) => {
        this.taskArr = res;
      },
      error: (err) => {
        alert("Unable to get list of tasks");
      }
    });
  }

  addTask() {
    this.taskObj.task_name = this.addTaskValue;
    this.taskService.addTask(this.taskObj).subscribe({
      next: () => this.loadTasks(),
      error: (err) => alert(err)
    });
  }

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.taskService.editTask(this.taskObj).subscribe({
      next: () => this.loadTasks(),
      error: () => alert("Failed to update task")
    });
  }

  deleteTask(etask: Task) {
    this.taskService.deleteTask(etask).subscribe({
      next: () => this.loadTasks(),
      error: () => alert("Failed to delete task")
    });
  }

  call(etask: Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }
}