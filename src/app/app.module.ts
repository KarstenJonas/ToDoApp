import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateTODOComponent } from './component/tasks/create-todo/create-todo.component';
import { ReadTODOComponent } from './component/tasks/read-todo/read-todo.component';
import { UpdateTODOComponent } from './component/tasks/update-todo/update-todo.component';
import { DeleteTODOComponent } from './component/tasks/delete-todo/delete-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CreateTODOComponent,
    ReadTODOComponent,
    UpdateTODOComponent,
    DeleteTODOComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
