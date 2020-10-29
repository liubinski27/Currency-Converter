import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConverterComponent } from './converter.component';

import { ConverterSharedModule } from '../shared/converter-shared.module';

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
  ]
})

export class ConverterModule { }