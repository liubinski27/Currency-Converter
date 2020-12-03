import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import { DateComponent } from './components/date/date.component';
import { UrlService } from './services/url.service';
import { LanguageService } from './services/language.service';

@NgModule({
    declarations: [
        DateComponent
    ],
    providers: [
        MatDatepickerModule,
        MatNativeDateModule,
        UrlService,
        LanguageService
    ],
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
        FormsModule,
        CommonModule,
        HttpClientModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        DateComponent
    ]
})

export class SharedModule { }