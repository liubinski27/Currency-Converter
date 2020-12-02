import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'ru' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})

export class DateComponent {
  constructor(
    private translateService: TranslateService,
    private _adapter: DateAdapter<any>
  ) {
    this.translateService.onLangChange.subscribe(event => {
      if (event.lang === 'ru') {
        this._adapter.setLocale('ru');
      }
      if (event.lang === 'en') {
        this._adapter.setLocale('en');
      }
    });
  }

  date: string;

  @Output() onChange: EventEmitter<string> = new EventEmitter();
  sendDate(event) {
    this.date = event.value._i.year.toString() + '-' + ((event.value._i.month) + 1).toString() + '-' + event.value._i.date.toString();
    console.log(event.value._i);
    this.onChange.emit(this.date);
  }
}