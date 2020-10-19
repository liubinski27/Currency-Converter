import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { ICurrency, ILoadedCurrency } from '../models/currency';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  currenciesList: ICurrency[];

  constructor(
    private converterService: ConverterService
  ) { }

  getCurrencies(date: string = '') {
    this.converterService.getCurrencies(date).subscribe((response: ILoadedCurrency[]) => {
      this.currenciesList = ConverterService.processCurrencies(response);
    });
  }

  ngOnInit(): void {
    this.getCurrencies();
  }
}