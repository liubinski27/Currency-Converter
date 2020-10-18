import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "./url.service";
import { ICurrencyResponse } from './models/currency';
import { ICurrency } from './models/currency';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConverterService {

  currenciesList: ICurrency[];

  constructor(
    private http: HttpClient,
    private urlService: UrlService
  ) { }

  getCurrencies(date: string) {
    const subject = new BehaviorSubject(this.currenciesList);
    const url = this.urlService.getUrl(date);
    this.mapLoadedCurrencies(subject, url);
    return subject;
  }

  mapLoadedCurrencies(subject, url: string) {
    this.http.get(url).subscribe((response: ICurrencyResponse[]) => {
      this.currenciesList = response.map(item => ({
        id: item.Cur_ID,
        date: item.Date,
        abbreviation: item.Cur_Abbreviation,
        scale: item.Cur_Scale,
        name: item.Cur_Name,
        rate: item.Cur_OfficialRate
      }));
      subject.next(this.currenciesList);
    })
  }

  findCurrency(array: ICurrency[], currency: string) {
    return array.find(item => item.abbreviation === currency);
  }
}