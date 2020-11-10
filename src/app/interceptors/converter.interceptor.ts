import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { tap, catchError } from "rxjs/operators";
import { LanguageService } from '../shared/services/language.service';

@Injectable()
export class ConverterInterceptor implements HttpInterceptor {

  constructor(
    public toastrService: ToastrService,
    public languageService: LanguageService
  ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.body.length === 0) {
            this.languageService.getTranslate('converter.interceptor').subscribe((response: string) => {
              this.toastrService.warning(response['warning.msg'], response['error'], { positionClass: 'toast-bottom-right' });
            });
          };
        }
      }),
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          this.languageService.getTranslate('converter.interceptor').subscribe((response: string) => {
            this.toastrService.warning(response['error.msg'], response['error'], { positionClass: 'toast-bottom-right' });
          });
        }
        return of(error);
      }));
  }
}