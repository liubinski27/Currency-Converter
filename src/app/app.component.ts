import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Currency-Converter';

  constructor(private translateService: TranslateService) {
    translateService.addLangs(['en', 'ru'])
    translateService.setDefaultLang('ru');
    translateService.use('ru');
  }

}
