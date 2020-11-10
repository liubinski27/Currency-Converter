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

  constructor(
    private translateService: TranslateService
  ) { }

  changeLang(language: string) {
    this.translateService.use(language);
  }
}