import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { ICurrency } from '../models/currency';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  currenciesList: ICurrency[];
  curListForFooter: ICurrency[] = [];
  curAbrForFooter = ['USD', 'EUR', 'RUB', 'PLN', 'UAH'];

  constructor(
    private converterService: ConverterService
  ) { }

  getCurrencies(date: string = '') {
    this.converterService.getCurrencies(date).subscribe((response: ICurrency[]) => {
      this.currenciesList = response;
      if (this.currenciesList) {
        this.addCursInFooter();
      }
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
    this.getCurrencies();
  }
}