import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '../interfaces/token';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "http://localhost:8080/ws/token"
  constructor(private http: HttpClient) { }

  login(user: User) {
    return this.http.post<Token>(this.url, user)
  }
  saveInSession(res: Token) {
    localStorage.setItem("accessToken", res.accessToken ?? "")
    localStorage.setItem("refreshToken", res.refreshToken ?? "")
  }
  clearSession() {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
  }
}
