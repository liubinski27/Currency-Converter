import { NgModule } from '@angular/core'; 
import { ConverterSharedModule } from '../shared/converter-shared.module';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';

@NgModule({
  declarations: [
    CoursesComponent
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