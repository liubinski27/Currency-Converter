import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UrlService } from "./url.service";
 
@Injectable({
  providedIn: 'root'
})

export class ConverterService {

  constructor (
    private http: HttpClient,
    private urlService: UrlService
  ) {}

  getCurrencies(date: string) {
    const url = 'https://www.nbrb.by/api/exrates/rates?ondate=' + date + '&periodicity=0';
    return this.http.get(url);
  }

}
