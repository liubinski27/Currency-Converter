import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { ICurrency } from '../models/currency';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit {

  currenciesList: ICurrency[];
  selectedCurAbbrList = [];
  currency: string;
  inputValueInByn: number = 0;
  selectedCurrencies: ICurrency[] = [];
  savedCurIndex: number;
  savedCurValue: number;

  constructor(
    private converterService: ConverterService
  ) { }

  getCurrencies(date: string = '') {
    this.converterService.getCurrencies(date).subscribe((response: ICurrency[]) => {
      this.currenciesList = response;
      if (this.currenciesList) {
        this.currency = this.currenciesList[0].abbr;
        this.getSavedData();
      }
    });
  }

  addSelectedCurrencies() {
    const selectedCurrency = this.selectedCurrencies.find(item => this.findCur(item, this.currency));
    if (!selectedCurrency) {
      const currencyInList = this.currenciesList.find(item => this.findCur(item, this.currency));
      if (currencyInList) {
        this.selectedCurrencies.push(currencyInList);
      }
    }
    this.saveData();
  }

  deleteInput(selectedCur: string) {
    const index = this.selectedCurrencies.findIndex(item => this.findCur(item, selectedCur));
    if (index >= 0) {
      this.selectedCurrencies.splice(index, 1);
    }
    if (!this.selectedCurrencies.length) {
      this.inputValueInByn = 0;
      this.savedCurValue = 0;
      this.savedCurIndex = 0;
    }
    this.saveData();
  }

  findCur(item, currency) {
    return item.abbr === currency;
  }

  disableOption(selectedCur: string) {
    return this.selectedCurrencies.find(item => this.findCur(item, selectedCur));
  }

  convertInputToByn(curValue, curScale, curRate, i) {
    this.inputValueInByn = curValue / curScale * curRate;
    this.saveData();
    this.savedCurIndex = i;
    this.savedCurValue = curValue;
  }

  convertInputToCur(curScale, curRate, i) {
    if (i === this.savedCurIndex) {
      return this.savedCurValue;
    } else {
      const value = this.inputValueInByn * curScale / curRate;
      return Number.isInteger(value) ? value : value.toFixed(4);
    }
  }

  saveData() {
    this.selectedCurrencies.forEach(item => {
      const savedAbbr = this.selectedCurAbbrList.find(el => el === item.abbr);
      if (!savedAbbr) {
        this.selectedCurAbbrList.push(item.abbr);
      }
    })
    sessionStorage.setItem('selectedCurs', JSON.stringify(this.selectedCurAbbrList));
  }

  getSavedData() {
    this.selectedCurrencies = [];
    const savedCurs = sessionStorage.getItem('selectedCurs');
    if (savedCurs) {
      const parsedSavedCurs = JSON.parse(savedCurs);
      this.selectedCurAbbrList = parsedSavedCurs;
      this.selectedCurAbbrList.forEach(savedCur => {
        const currencyInList = this.currenciesList.find(item => item.abbr === savedCur);
        if (currencyInList) {
          const selectedCurrency = this.selectedCurrencies.find(item => item === currencyInList);
          if (!selectedCurrency) {
            this.selectedCurrencies.push(currencyInList);
          }
        }
      })
    }
  }

  ngOnInit(): void {
    this.getCurrencies();
  }
}