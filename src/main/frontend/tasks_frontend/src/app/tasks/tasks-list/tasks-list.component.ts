import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor(private taskService:TaskService) { }

  tasks:Task[]= [];

  ngOnInit() {
      return this.taskService.getTasks()
          .subscribe((tasks:any[])=>
      {
          this.tasks = tasks;
      });
  }

  onTaskChange( eve:any, task: Task)
  {
      this.saveTask(task, eve.target.checked);
  }

  getDueDateLabel(task: Task)
  {
      return task.completed ? 'badge-success' : 'badge-secondary';
  }

  saveTask(newTask:Task, checked:boolean)
  {
      newTask.completed = checked;
      this.taskService.updateTask(newTask);
  }
}
