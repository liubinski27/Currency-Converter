import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class UrlService {

  constructor(
    private http: HttpClient
  ) { }

  getUrlWithRates(date: string) {
    return ('https://www.nbrb.by/api/exrates/rates?ondate=' + date + '&periodicity=0');
  }

  getUrlWithEnLang() {
    return ('https://www.nbrb.by/api/exrates/currencies');
  }
}