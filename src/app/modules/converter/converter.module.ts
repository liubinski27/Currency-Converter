import { NgModule } from '@angular/core';
import { ConverterSharedModule } from '../shared/converter-shared.module';
import { RouterModule, Routes } from '@angular/router';

import { ConverterComponent } from './converter.component';

export const ROUTES: Routes = [
  { path: '', component: ConverterComponent }
];

@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [
    ConverterSharedModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    ConverterComponent
  ]
})

export class ConverterModule { }