import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { ConverterService } from './converter.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';

const appRoutes: Routes = [
    { path: '', component: CoursesComponent },
    { path: 'converter', component: ConverterComponent },
    { path: '**', component: CoursesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    HeaderComponent,
    FooterComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
