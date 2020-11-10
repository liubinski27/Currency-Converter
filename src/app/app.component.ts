import { Component, OnInit } from '@angular/core';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  title = 'Currency-Converter';

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageService.setLanguage();
  }
}