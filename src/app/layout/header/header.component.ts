import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

enum LanguagesList {
  RUSSIAN = 'ru',
  ENGLISH = 'en'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  eLanguagesList = LanguagesList;
  activePage: string

  constructor(
    private translateService: TranslateService
  ) { }

  setActivePage(nameOfSelectedPage: string) {
    this.activePage = nameOfSelectedPage;
  } 

  changeLang(language: string) {
    this.translateService.use(language);
  }
}