import { ConverterService } from '../shared/services/converter.service';
import { Component, OnInit } from '@angular/core';
import { ICurrency, ILoadedCurrency, ILoadedCurrencyWithEN } from '../shared/models/currency';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  currenciesList: ICurrency[];
  currenciesListWithLangs: ILoadedCurrencyWithEN[];
  sortValue: string = 'name_asc';
  sortOrder: string = 'asc';
  sortAttribute: string = 'name';
  isRu: boolean = true;

  constructor(
    private converterService: ConverterService,
    private translateService: TranslateService
  ) {
    this.translateService.onLangChange.subscribe(event => {
      if (event.lang === 'ru') {
        console.log(event.lang)
        this.isRu = true;
      }
      else {
        console.log(event.lang)
        this.isRu = false;
        this.getCurrencies();
      }
    });
  }

  getCurrencies(date: string = '') {
    this.converterService.getCurrencies(date).subscribe((response: ILoadedCurrency[]) => {
      if (this.isRu) {
        this.currenciesList = ConverterService.processCurrencies(response);
      }
      else {
        this.converterService.getCurrenciesWithEnLang().subscribe((responseWithEN: ILoadedCurrencyWithEN[]) => {
          response.forEach(item => {
            const foundCurrency = responseWithEN.find(element => element.Cur_ID === item.Cur_ID);
            item.Cur_Name = foundCurrency.Cur_Name_Eng;
            this.currenciesList = ConverterService.processCurrencies(response);
          });
        });
      }
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