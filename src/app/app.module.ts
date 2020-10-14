import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { DateComponent } from './date/date.component';
import { ConverterService } from './converter.service';
import { UrlService } from './url.service';

const appRoutes: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'converter', component: ConverterComponent },
    { path: '**', component: CoursesComponent }
]

export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
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
  providers: [
    ConverterService,
    UrlService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }