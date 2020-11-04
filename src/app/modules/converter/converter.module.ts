import { NgModule } from '@angular/core';
import { ConverterSharedModule } from '../shared/converter-shared.module';

import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './converter.component';

@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [
    ConverterSharedModule,
    ConverterRoutingModule
  ],
  exports: [
    ConverterComponent
  ]
})

export class ConverterModule { }