import { NgModule } from '@angular/core';

import { ConverterService } from './services/converter.service';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        ConverterService
    ],
    imports: [
        SharedModule
    ],
    exports: [
        SharedModule,
        HeaderComponent,
        FooterComponent
    ]
})

export class ConverterSharedModule { }