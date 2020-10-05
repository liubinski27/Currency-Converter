import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { Currency } from '../models/ICurrency';
import { CurrencyResponse } from '../models/ICurrency';
import { SavedValues } from "../models/IStoredAppState";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit {

  currenciesList: Currency[];
  currency: string;
  inputValueInByn: number = 0;
  selectedCurrencies: Currency[] = [];
  savedCurIndex: number;
  savedCurValue: number;
  isSelectDisable = false;
  savedData: SavedValues = {
    valueInByn: this.inputValueInByn,
    selectCurList: this.selectedCurrencies
  };

  constructor(private converterService: ConverterService) {}

  getCurrencies(date: string) {
    this.converterService.getCurrencies(date).subscribe((response: Currency[]) => {
      this.selectedCurrencies = [];
      this.clearSavedValues();
      this.currenciesList = response;
      if (this.currenciesList) {
        this.currency = this.currenciesList[0].abbr;
      }
    });
  }

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
      this.clearSavedValues();
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

  clearSavedValues() {
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
      if (parsedSaved) {
        this.inputValueInByn = parsedSaved.valueInByn;
        this.selectedCurrencies = parsedSaved.selectCurList;
      }
      else {
        this.clearSavedValues();
      }
    }
  }

  ngOnInit(): void {
    this.getCurrencies('');
    this.getSavedData();
  }

}
