import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/ICurrency';
import { CurrencyResponse } from '../models/ICurrency';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  currenciesList: Currency[];
  dateValue: string;

  constructor(private converterService: ConverterService) {}

  onChangedDate(date: string) {
    this.dateValue = date;
    this.getCurrencies();
  }

  getCurrencies() {
    this.converterService.getCurrencies(this.dateValue).subscribe((response: CurrencyResponse[]) => {
      this.currenciesList = response.map(el => ({
        id: el.Cur_ID,
        date: el.Date,
        abbr: el.Cur_Abbreviation,
        scale: el.Cur_Scale,
        name: el.Cur_Name,
        rate: el.Cur_OfficialRate
      }));
    });
  }

  ngOnInit(): void {
    this.getCurrencies();
  }

}
