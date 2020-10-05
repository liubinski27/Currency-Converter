import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "./url.service";
import { CurrencyResponse } from './models/ICurrency';
import { Currency } from './models/ICurrency';
import { BehaviorSubject, Subject } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})

export class ConverterService {

  currenciesList: Currency[];

  constructor (
    private http: HttpClient,
    private urlService: UrlService
  ) {}

  getCurrencies(date: string) {
    const subject = new BehaviorSubject(this.currenciesList);
    const url = this.urlService.getUrl(date);
    this.http.get(url).subscribe((response: CurrencyResponse[]) => {
      this.currenciesList = response.map(el => ({
        id: el.Cur_ID,
        date: el.Date,
        abbr: el.Cur_Abbreviation,
        scale: el.Cur_Scale,
        name_ru: el.Cur_Name,
        name_en: el.Cur_Name_Eng,
        rate: el.Cur_OfficialRate
      }));
      subject.next(this.currenciesList);
      subject.complete;
    })
    return subject;
  }

}
