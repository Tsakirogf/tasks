import {Component} from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-datepicker',
  templateUrl: './task-datepicker.component.html',
  styleUrls: ['./task-datepicker.component.css']
})

export class TaskDatepickerComponent{

    model: NgbDateStruct;
    date: {year: number, month: number};

    constructor(private calendar: NgbCalendar) {
    }

}
