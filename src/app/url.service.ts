import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class UrlService {

  constructor(
    private http: HttpClient
  ) { }

  getUrl(date: string) {
    return ('https://www.nbrb.by/api/exrates/rates?ondate=' + date + '&periodicity=0');
  }
}