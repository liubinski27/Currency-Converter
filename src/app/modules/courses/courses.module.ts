import { NgModule } from '@angular/core'; 
import { ConverterSharedModule } from '../shared/converter-shared.module';
import { RouterModule, Routes } from '@angular/router';

import { CoursesComponent } from './courses.component';

export const ROUTES: Routes = [
  { path: '', component: CoursesComponent }
];

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    ConverterSharedModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    CoursesComponent
  ]
})

export class CoursesModule { }