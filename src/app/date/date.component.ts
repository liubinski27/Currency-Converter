import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  date: string;

  constructor() {}

  @Output() onChanged: EventEmitter<string> = new EventEmitter();
  sendDate() {
    this.onChanged.emit(this.date);
  }

  ngOnInit(): void {
  }

}
