import { Component, OnInit } from '@angular/core';
import { Task } from '../../model/task';
import { CrudService } from '../../service/crud.service';


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

  constructor(private crudService : CrudService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }
  
  getAllTask() {
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert("Unable to get list of tasks");
    });
  }

  addTask() {
    // Der Eingabe-Wert von addTaskValue wird der task_name-Eigenschaft von taskObj zugewiesen.
    this.taskObj.task_name = this.addTaskValue;

    // Eine temporäre ID wird auf der Client-Seite generiert.
    this.taskObj.id = this.taskArr.length + 1;
  
    // Die addTask-Methode des CrudService wird aufgerufen, um eine neue Aufgabe hinzuzufügen.
    this.crudService.addTask(this.taskObj).subscribe(
      // Erfolgreiche Antwort vom Server
      res => {
        // Nach erfolgreichem Hinzufügen einer Aufgabe wird die ngOnInit-Methode aufgerufen,
        // um die Liste der Aufgaben zu aktualisieren.
        this.ngOnInit();
        
        // Der Wert von addTaskValue wird zurückgesetzt, um das Eingabefeld zu leeren.
        this.addTaskValue = '';
      },
      // Fehlerbehandlung, falls die Anforderung fehlschlägt.
      err => {
        // Eine Meldung mit der Fehlermeldung wird angezeigt.
        alert(err);
      }
    );
  }
  

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to update task");
    })
  }

  deleteTask(etask : Task) {
    this.crudService.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to delete task");
    });
  }

  call(etask : Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }


}