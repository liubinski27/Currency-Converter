import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ConverterComponent } from './converter/converter.component';

const appRoutes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'converter', component: ConverterComponent },
    { path: '**', component: CoursesComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule { };