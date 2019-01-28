import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AuthorisationInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.authService.accessToken) {
      return next.handle(
        req.clone({
          headers: req.headers.append('Authorization', `Bearer ${this.authService.accessToken}`)
        })
      );
    }

    return next.handle(req);
  }
}
