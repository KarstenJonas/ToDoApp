import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Task } from '../../../model/task';
import { TaskService } from '../../../service/task.service';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrl: './delete-todo.component.css'
})
export class DeleteTODOComponent {

  constructor(private taskService : TaskService) { }

  @Input() task: Task = new Task;
  @Output() taskDeleted = new EventEmitter<void>();

  deleteTask(task : Task) {
    this.taskService.deleteTask(task).subscribe({
      next: () => this.taskDeleted.emit(),
      error: () => alert("Failed to delete task")
    });
  }

}
