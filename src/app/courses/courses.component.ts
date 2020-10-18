import { ConverterService } from './../converter.service';
import { Component, OnInit } from '@angular/core';
import { ICurrency } from '../models/currency';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [
    './courses.component.scss',
    '../../assets/styles/scss/common.scss'
  ]
})

export class CoursesComponent implements OnInit {

  currenciesList: ICurrency[];

  constructor(
    private converterService: ConverterService
  ) { }

  getCurrencies(date: string = '') {
    this.converterService.getCurrencies(date).subscribe((response: ICurrency[]) => {
      this.currenciesList = response;
    });
  }

  ngOnInit(): void {
    this.getCurrencies();
  }
}