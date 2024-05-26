import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  const localToken = sessionStorage.getItem('token');
  if (localToken) {
    const cloned = req.clone({
      setHeaders: {
        authorization: `bearer ${localToken}`,
      },
    });
    return next(cloned);
  } else {
    return next(req);
  }
};