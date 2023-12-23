import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL :string = "http://localhost:8080/api/auth";
  constructor(private http:HttpClient) {}

  signIn(userObj){
    return this.http.post<{accessToken:any}>(this.userURL+"/login",userObj)
  }
  signUp(userObj){
    return this.http.post(this.userURL+"/register",userObj)
  }
}
