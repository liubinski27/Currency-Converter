import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/ICurrency';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  currenciesList: Currency[];

  constructor(private converterService: ConverterService) {}

  getCurrencies(date: string) {
    this.converterService.getCurrencies(date).subscribe((response: Currency[]) => {
      this.currenciesList = response;
    });
  }

  ngOnInit(): void {
    this.getCurrencies('');
  }

}
