import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated: boolean = false;
  public roles: any;
  public username!: string;
  public accessToken!: string;
  constructor(public http: HttpClient,private router:Router) {



  }
  public login(username: string, password: string) {
    let options = {
      headers: new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
    }
    let params = new HttpParams().set("username", username).set("password", password)
    return this.http.post("http://localhost:8085/auth/login", params, options);
  }
  public loadProfile(data: any) {
    this.isAuthenticated = true
    this.accessToken = data['access-token']
    let decodedJwt: any = jwtDecode(this.accessToken);
    console.log(decodedJwt);
    this.roles = decodedJwt["scope"]

    this.username = decodedJwt["sub"]
    localStorage.setItem("access-token", this.accessToken)

  }

  loadTokenFromStorage() {
    let token = localStorage.getItem("access-token")
    if (token) {
      let data = {
        "access-token": token
      }
      this.loadProfile(data)
      this.router.navigateByUrl("/admin")

    }
  }
  logout() {

    this.isAuthenticated = false;
    this.roles = undefined;
    this.username = "";
    this.accessToken = "";
    localStorage.clear()
    this.router.navigateByUrl("login")
  }

}
