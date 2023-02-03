import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/user';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private as: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let accessToken = localStorage.getItem('accessToken') ?? '';

    if (request.url !== 'http://localhost:8080/ws/token' && accessToken) {
      const refreshToken = localStorage.getItem('refreshToken') ?? '';
      const decoded: { exp: number } = jwtDecode(accessToken);
      const exp: number = decoded['exp'] * 1000;
      if (Date.now() > exp) {
        console.log(refreshToken);

        const user: User = {
          grantType: 'refreshToken',
          refreshToken: refreshToken,
        };
        this.as.login(user).subscribe((res) => {
          this.as.saveInSession(res);
          accessToken = res.accessToken ?? '';
        });
      }
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + accessToken,
        },
      });
    }
    return next.handle(request);
  }
}
