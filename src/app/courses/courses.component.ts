import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/ICurrency';
import { CurrencyResponse } from '../models/ICurrencyResponse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  currenciesList: Currency[];
  dateValue: string;
  isDateOk: boolean;

  constructor(private converterService: ConverterService) {}

  getCurrencies() {
    this.converterService.getCurrencies(this.dateValue).subscribe((response: CurrencyResponse[]) => {
      this.isDateOk = false;
      this.currenciesList = response.map(el => ({
        id: el.Cur_ID,
        date: el.Date,
        abbr: el.Cur_Abbreviation,
        scale: el.Cur_Scale,
        name: el.Cur_Name,
        rate: el.Cur_OfficialRate
      }));
      if (this.currenciesList) {
        this.isDateOk = true;
      }
    });
  }

  ngOnInit(): void {
    this.getCurrencies();
  }

}
