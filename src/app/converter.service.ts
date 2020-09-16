import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class ConverterService {

  constructor(private http: HttpClient) {

  }

  date: string;

  getCurrencies() {
    return this.http.get('https://www.nbrb.by/api/exrates/rates?ondate=' + this.date + '&periodicity=0');
  }

}
