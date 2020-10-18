import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})

export class DateComponent {

  date: string;

  @Output() onChange: EventEmitter<string> = new EventEmitter();
  sendDate() {
    this.onChange.emit(this.date);
  }
}