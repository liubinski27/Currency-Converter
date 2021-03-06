import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { DateComponent } from './components/date/date.component';
import { UrlService } from './services/url.service';
import { LanguageService } from './services/language.service';

@NgModule({
    declarations: [
        DateComponent
    ],
    providers: [
        UrlService,
        LanguageService
    ],
    imports: [
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