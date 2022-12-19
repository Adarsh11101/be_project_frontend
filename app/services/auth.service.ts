import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl="http://127.0.0.1:8080/register";
  private _loginUrl="http://127.0.0.1:8080/login";
  constructor(private http:HttpClient) { }
  registerUser(user:any)
  {
    return this.http.post(this._registerUrl,user);
  }
  loginUser(user:any)
  {
     return this.http.post(this._loginUrl,user);
  }
}
