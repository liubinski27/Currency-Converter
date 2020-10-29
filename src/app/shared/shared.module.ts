import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DateComponent } from './components/date/date.component';
import { UrlService } from './services/url.service';
import { LanguageService } from './services/language.service';
import { CommonModule } from '@angular/common';

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

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
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            },
            useDefaultLang: false
        })
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
        DateComponent,
        FormsModule,
        CommonModule,
        TranslateModule
    ],
    providers: [
        UrlService,
        LanguageService
    ],
})

export class SharedModule { }