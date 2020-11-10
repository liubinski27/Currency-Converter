import { ConverterService } from '../../services/converter.service';
import { Component, OnInit } from '@angular/core';
import { ICurrency, ILoadedCurrency } from '../../models/currency';

@Component({
  selector: 'converter-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  currenciesList: ICurrency[];
  selectedCurrencies: ICurrency[] = [];
  selectedCurrenciesAbbreviations = ['USD', 'EUR', 'RUB', 'PLN', 'UAH', 'AUD'];

  constructor(
    private converterService: ConverterService
  ) { }

  getCurrencies(date: string = '') {
    this.converterService.getCurrencies(date).subscribe((response: ILoadedCurrency[]) => {
      this.currenciesList = ConverterService.processCurrencies(response);
      if (this.currenciesList) {
        this.addCurrenciesInFooter();
      }
    });
  }

  addCurrenciesInFooter() {
    this.selectedCurrenciesAbbreviations.forEach(item => {
      const foundCurrencyInCurrenciesList = this.converterService.findCurrency(this.currenciesList, item);
      if (foundCurrencyInCurrenciesList) {
        this.selectedCurrencies.push(foundCurrencyInCurrenciesList);
      }
    });
  }

  calculateRatesValue(currencyScale: number, currencyRate: number) {
    const value = currencyRate / currencyScale;
    return value.toFixed(4);
  }

  ngOnInit(): void {
    this.getCurrencies();
  }
}