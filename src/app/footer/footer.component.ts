import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../shared/currency';
import { CurrencyResponse } from '../shared/currency-response';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private converterService: ConverterService) {
    this.converterService.getCurrencies().subscribe((response: CurrencyResponse[]) => {
      this.currenciesList = response.map(el => ({
        id: el.Cur_ID,
        date: el.Date,
        abbr: el.Cur_Abbreviation,
        scale: el.Cur_Scale,
        name: el.Cur_Name,
        rate: el.Cur_OfficialRate
      }));
      //this.currencies.next(currencies);
      this.addCursInFooter();
      console.log('footer loaded');
    });
  }

  currenciesList: Currency[] = [];
  curListForFooter: Currency[] = [];
  curAbrForFooter = ['USD', 'EUR', 'RUB', 'PLN', 'UAH'];

  addCursInFooter() {
    this.curAbrForFooter.forEach(elem => {
      const foundCur = this.currenciesList.find(item => item.abbr === elem);
      if (foundCur) {
        this.curListForFooter.push(foundCur);
      } else {
        console.log('Error in the array of selected currencies.');
      }
    });
  }

  calcRatesValue(curScale, curRate) {
    const value = curRate / curScale;
    return value.toFixed(4);
  }

  ngOnInit(): void {
  }

}
