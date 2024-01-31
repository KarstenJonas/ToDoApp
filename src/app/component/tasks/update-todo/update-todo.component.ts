import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../model/task';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrl: './update-todo.component.css'
})
export class UpdateTODOComponent {
  
  @Input() task: Task = new Task;
  @Output() taskUpdated = new EventEmitter<void>();

  taskObj : Task = new Task();
  editTaskValue : string = '';

  constructor(private taskService : TaskService) { }

  updateTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.taskService.editTask(this.taskObj).subscribe({
      next: () => this.taskUpdated.emit(),
      error: () => alert("Failed to update task")
    });
  }

  call(etask: Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }
}
