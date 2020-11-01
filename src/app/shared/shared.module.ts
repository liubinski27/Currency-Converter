import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DateComponent } from './components/date/date.component';
import { UrlService } from './services/url.service';
import { LanguageService } from './services/language.service';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        DateComponent
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
        HeaderComponent,
        FooterComponent,
        DateComponent
    ],
    providers: [
        UrlService,
        LanguageService
    ],
})

export class SharedModule { }