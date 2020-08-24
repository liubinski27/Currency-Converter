import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Currency } from '../shared/currency';
import { CurrencyResponse } from '../shared/currency-response';

interface keysForSave {
  valueInByn: number,
  selectCurList: Currency[]
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit {

  constructor(private converterService: ConverterService) {
    this.converterService.getCurrencies().subscribe((response: CurrencyResponse[]) => {
      this.isDateOk = false;
      this.isSelectDisable = true;
      this.currenciesList = response.map(el => ({
        id: el.Cur_ID,
        date: el.Date,
        abbr: el.Cur_Abbreviation,
        scale: el.Cur_Scale,
        name: el.Cur_Name,
        rate: el.Cur_OfficialRate
      }));
      //this.currencies.next(currencies);
      this.currency = this.currenciesList[0].abbr;
      if (this.currenciesList) {
        this.isDateOk = true;
        this.isSelectDisable = false;
      }
      console.log('converter loaded');
    });
    this.getSavedData();
  }

  currenciesList: Currency[];
  currency: string;
  inputValueInByn: number = 0;
  selectedCurrencies: Currency[] = [];
  savedCurIndex: number;
  savedCurValue: number;
  dateValue: string;
  isDateOk = false;
  isSelectDisable = false;
  savedData: keysForSave = {
    valueInByn: this.inputValueInByn,
    selectCurList: this.selectedCurrencies
  };

  addSelectedCurrencies() {
    const selectedCurrency = this.selectedCurrencies.find(item => item.abbr === this.currency);
    if (!selectedCurrency) {
      const currencyInList = this.currenciesList.find(item => item.abbr === this.currency);
      if (currencyInList) {
        this.selectedCurrencies.push(currencyInList);
      }
    }
    this.saveData();
  }

  deleteInput(selectedCur: string) {
    const curForDel = this.selectedCurrencies.findIndex(item => item.abbr === selectedCur);
    if (curForDel >= 0) {
      this.selectedCurrencies.splice(curForDel, 1);
    }
    if (this.selectedCurrencies.length === 0) {
      this.clearCache();
    }
    this.saveData();
  }

  disableOption(selectedCur: string) {
    return this.selectedCurrencies.find(curAbbr => curAbbr.abbr === selectedCur);
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
      if (value === 0) {
        return value;
      } else {
        return value.toFixed(4);
      }
    }
  }

  sendDateToService() {
    this.converterService.date = this.dateValue;
    this.selectedCurrencies = [];
    this.clearCache();
    this.converterService.getCurrencies();
  }

  clearCache() {
    this.inputValueInByn = 0;
    this.savedCurValue = 0;
    this.savedCurIndex = 0;
  }

  saveData() {
    this.savedData.selectCurList = this.selectedCurrencies;
    this.savedData.valueInByn = this.inputValueInByn;
    sessionStorage.setItem('converter', JSON.stringify(this.savedData));
  }

  getSavedData() {
    if (sessionStorage.getItem('converter') !== null) {
      const saved = sessionStorage.getItem('converter');
      const parsedSaved = JSON.parse(saved);
      this.inputValueInByn = parsedSaved.valueInByn;
      this.selectedCurrencies = parsedSaved.selectCurList;
    }
  }

  ngOnInit(): void {
  }

}
