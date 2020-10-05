import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/ICurrency';
import { CurrencyResponse } from '../models/ICurrency';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currenciesList: Currency[] = [];
  curListForFooter: Currency[] = [];
  curAbrForFooter = ['USD', 'EUR', 'RUB', 'PLN', 'UAH'];

  constructor(private converterService: ConverterService) { }

  getCurrencies(date: string) {
    this.converterService.getCurrencies(date).subscribe((response: Currency[]) => {
      this.currenciesList = response;
      this.addCursInFooter();
    });
  }

  addCursInFooter() {
    this.curAbrForFooter.forEach(elem => {
      const foundCur = this.currenciesList.find(item => item.abbr === elem);
      if (foundCur) {
        this.curListForFooter.push(foundCur);
      }
    });
  }

  calcRatesValue(curScale, curRate) {
    const value = curRate / curScale;
    return value.toFixed(4);
  }

  ngOnInit(): void {
    this.getCurrencies('');
  }

}
