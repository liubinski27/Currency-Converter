import { NgModule } from '@angular/core';

import { ConverterService } from './services/converter.service';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  providers: [
      ConverterService,
  ],
  imports: [
      SharedModule
  ],
  exports: [
      SharedModule
  ]
})

export class ConverterSharedModule { }