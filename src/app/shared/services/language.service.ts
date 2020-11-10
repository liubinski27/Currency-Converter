import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class LanguageService {

  constructor(
    private translateService: TranslateService
  ) { }

  setLanguage() {
    this.translateService.addLangs(['en', 'ru']);
    this.translateService.setDefaultLang('ru');
    this.translateService.use('ru');
  }

  getTranslate(key: string) {
    return this.translateService.get(key);
  }
}