import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/currency';
import { CurrencyResponse } from '../shared/currency-response';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private converterService: ConverterService) {
    this.getCurrencies();
  }

  currenciesList: Currency[];
  dateValue: string;
  isDateOk: boolean;

  getCurrencies() {
    this.converterService.getCurrencies().subscribe((response: CurrencyResponse[]) => {
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

  sendDateToService() {
    this.converterService.date = this.dateValue;
    this.getCurrencies();
  }

  ngOnInit(): void {
  }

}
