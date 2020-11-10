import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { tap, catchError } from "rxjs/operators";

@Injectable()
export class ConverterInterceptor implements HttpInterceptor {
  constructor(public toasterService: ToastrService) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.body.length === 0) {
            this.toasterService.warning('На выбранную дату данных нет', 'Ошибка', { positionClass: 'toast-bottom-right' });
          };
        }
      }),
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          this.toasterService.error('Сервер не отвечает', 'Ошибка', { positionClass: 'toast-bottom-right' });
        }
        return of(error);
      }));
  }
}