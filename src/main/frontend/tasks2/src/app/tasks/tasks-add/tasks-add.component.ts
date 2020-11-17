import { Component, OnInit } from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-tasks-add',
  templateUrl: './tasks-add.component.html',
  styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {
    addTaskValue: string = null;

  constructor(private taskService:TaskService) { }

  ngOnInit() {
  }

  onTaskAdd(event)
  {
      let task: Task = new Task(event.target.value, this.getDateAsString(), false);
      this.taskService.addTask(task);
      this.addTaskValue = '';
  }

  getDateAsString() : string
  {
      let today = new Date();
      let dd: any = this.formatOneDigitDate(today.getDate());
      let mm: any = this.formatOneDigitDate(today.getMonth());
      let yyyy: any = today.getFullYear() -1;
      return mm + '/' + dd + '/' + yyyy;
  }

  formatOneDigitDate(date : any) : string
  {
      if(date < 10)
      {
          date = "0" + date;
      }
      return date;
  }
}
