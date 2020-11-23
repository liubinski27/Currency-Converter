import { ConverterService } from '../shared/services/converter.service';
import { Component, OnInit } from '@angular/core';
import { ICurrency, ILoadedCurrency } from '../shared/models/currency';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  currenciesList: ICurrency[];
  sortValue: string ='name_asc';
  sortOrder: string = 'asc';
  sortAttribute: string = 'name';

  constructor(
    private converterService: ConverterService
  ) { }

  getCurrencies(date: string = '') {
    this.converterService.getCurrencies(date).subscribe((response: ILoadedCurrency[]) => {
      this.currenciesList = ConverterService.processCurrencies(response);
    });
  }

  selectCoursesSorting() {
    switch (this.sortValue) {
      case 'name_asc': this.sortOrder = 'asc'; this.sortAttribute = 'name'; break;
      case 'name_desc': this.sortOrder = 'desc'; this.sortAttribute = 'name'; break;
      case 'scale_asc': this.sortOrder = 'asc'; this.sortAttribute = 'scale'; break;
      case 'scale_desc': this.sortOrder = 'desc'; this.sortAttribute = 'scale'; break;
    }
  }

  ngOnInit(): void {
    this.getCurrencies();
  }
}