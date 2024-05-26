import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

export const headersInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
): Observable<HttpEvent<any>> => {
  console.log(req)
  const GUID = 'f4179b26-21ac-432c-bcd8-cb4bc6e50981'
  const modifiedRequest = req.clone({
    setHeaders: {
      GUID,
      mode: 'no-cors',
    }
  })
  return next(modifiedRequest);
}

