import { NgModule } from '@angular/core'; 
import { ConverterSharedModule } from '../shared/converter-shared.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CurrencySortPipe } from '../../pipes/currencySort.pipe'; 

@NgModule({
  declarations: [
    CoursesComponent,
    CurrencySortPipe
  ],
  providers: [
    CurrencySortPipe
  ],
  imports: [
    ConverterSharedModule,
    CoursesRoutingModule
  ],
  exports: [
    CoursesComponent
  ]
})

export class CoursesModule { }