import { Component, OnInit } from '@angular/core';
import { ConverterService } from '../shared/services/converter.service';
import { ICurrency, ILoadedCurrency } from '../shared/models/currency';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit {

  currenciesList: ICurrency[];
  selectedCurrencies: ICurrency[] = [];
  selectedCurrenciesAbbreviations: string[] = [];
  selectedCurrencyAbbreviation: string;
  convertedInputValueInByn: number = 0;
  savedCurrencyIndex: number;
  savedCurrencyValue: number;

  constructor(
    private converterService: ConverterService,
    private toastrService: ToastrService
  ) { this.toastrService.success('sfsdf', 'sdfsdf') }

  getCurrencies(date: string = '') {
    this.converterService.getCurrencies(date).subscribe((response: ILoadedCurrency[]) => {
      this.currenciesList = ConverterService.processCurrencies(response);
      if (this.currenciesList) {
        this.selectedCurrencyAbbreviation = this.currenciesList[0].abbreviation;
        this.getSavedData();
      }
    });
  }

  addSelectedCurrencies() {
    const foundCurrencyInSelectedCurrencies = this.converterService.findCurrency(this.selectedCurrencies, this.selectedCurrencyAbbreviation);
    if (!foundCurrencyInSelectedCurrencies) {
      const foundCurrencyInCurrenciesList = this.converterService.findCurrency(this.currenciesList, this.selectedCurrencyAbbreviation);
      if (foundCurrencyInCurrenciesList) {
        this.selectedCurrencies.push(foundCurrencyInCurrenciesList);
      }
    }
    this.saveData();
  }

  deleteInput(selectedCurrencyAbbreviation: string) {
    const indexOfSelectedCurrency = this.selectedCurrencies.findIndex(item => item.abbreviation === selectedCurrencyAbbreviation);
    if (indexOfSelectedCurrency >= 0) {
      this.selectedCurrencies.splice(indexOfSelectedCurrency, 1);
    }
    if (!this.selectedCurrencies.length) {
      this.convertedInputValueInByn = 0;
      this.savedCurrencyValue = 0;
      this.savedCurrencyIndex = 0;
    }
    this.saveData();
  }

  disableOption(selectedCurrencyAbbreviation: string) {
    return this.converterService.findCurrency(this.selectedCurrencies, selectedCurrencyAbbreviation);
  }

  convertInputToByn(currencyValue: number, currencyScale: number, currencyRate: number, index: number) {
    this.convertedInputValueInByn = currencyValue / currencyScale * currencyRate;
    this.saveData();
    this.savedCurrencyIndex = index;
    this.savedCurrencyValue = currencyValue;
  }

  convertInputToCurrency(currencyScale: number, currencyRate: number, index: number) {
    if (index === this.savedCurrencyIndex) {
      return this.savedCurrencyValue;
    } else {
      const value = this.convertedInputValueInByn * currencyScale / currencyRate;
      return Number.isInteger(value) ? value : value.toFixed(4);
    }
  }

  saveData() {
    this.selectedCurrenciesAbbreviations = [];
    this.selectedCurrencies.forEach(item => {
      const CurrencyAbbreviation = this.selectedCurrenciesAbbreviations.find(el => el === item.abbreviation);
      if (!CurrencyAbbreviation) {
        this.selectedCurrenciesAbbreviations.push(item.abbreviation);
      }
    });
    sessionStorage.setItem('selectedCurrencies', JSON.stringify(this.selectedCurrenciesAbbreviations));
  }

  getSavedData() {
    this.selectedCurrencies = [];
    const savedCurrenciesAbbreviations = sessionStorage.getItem('selectedCurrencies');
    if (savedCurrenciesAbbreviations) {
      this.selectedCurrenciesAbbreviations = JSON.parse(savedCurrenciesAbbreviations);
      this.selectedCurrenciesAbbreviations.forEach(item => {
        const foundCurrencyInCurrenciesList = this.converterService.findCurrency(this.currenciesList, item);
        if (foundCurrencyInCurrenciesList) {
          const selectedCurrency = this.selectedCurrencies.find(item => item === foundCurrencyInCurrenciesList);
          if (!selectedCurrency) {
            this.selectedCurrencies.push(foundCurrencyInCurrenciesList);
          }
        }
      });
    }
  }

  ngOnInit(): void {
    this.getCurrencies();
  }
}