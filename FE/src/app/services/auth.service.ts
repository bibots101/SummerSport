import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  userURL: string = "http://localhost:8080/api/auth/";
  login(user) {
    return this.http.post(this.userURL + "login", user);
  }
  signup(user) {
    return this.http.post(this.userURL + "signup", user);
  }
}
