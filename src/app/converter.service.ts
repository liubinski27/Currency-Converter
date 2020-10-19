import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "./url.service";
import { ILoadedCurrency } from './models/currency';
import { ICurrency } from './models/currency';

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
    const url = this.urlService.getUrl(date);
    return this.http.get(url);
  }

  public static processCurrencies(currencies: ILoadedCurrency[]): ICurrency[] {
    return currencies.map(item => ({
      id: item.Cur_ID,
      date: item.Date,
      abbreviation: item.Cur_Abbreviation,
      scale: item.Cur_Scale,
      name: item.Cur_Name,
      rate: item.Cur_OfficialRate
    }));
  }

  findCurrency(array: ICurrency[], currency: string) {
    return array.find(item => item.abbreviation === currency);
  }
}