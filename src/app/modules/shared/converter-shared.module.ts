import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ConverterService } from './services/converter.service';
import { SharedModule } from '../../shared/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { ConverterInterceptor } from './converter.interceptor';

@NgModule({
    declarations: [
        FooterComponent
    ],
    providers: [
        ConverterService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ConverterInterceptor,
            multi: true,
        },
    ],
    imports: [
        SharedModule
    ],
    exports: [
        SharedModule,
        FooterComponent
    ]
})

export class ConverterSharedModule { }