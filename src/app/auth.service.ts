import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const helper : JwtHelperService = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  token! : string;
  username! : string;
  headers! : HttpHeaders;

  
  constructor(private http : HttpClient, private router : Router) {
  }

  login (username : string, password : string) {
    this.http.post<any>('http://bilemo.tristan-lefevre.fr/login',{'username':username, 'password': password})
    .subscribe(
      (result) => {
        this.token = result.token;
        this.headers = new HttpHeaders().set('Authorization', 'Bearer '+ result.token);
        return this.router.navigate([""]);
      },
      () => {
        return this.router.navigate(["/login"]);
      }
    )
}

  getToken() {
    return this.token;
  }

  checkAuth(redirect : boolean = false) {
    if (this.token != null && !helper.isTokenExpired(this.token)) {
      return true;
    }
    if (redirect) {
      return this.router.navigate(['login']);
    }
    return false;
  }

  getHeader() {
    if (this.headers !== null) {
      return this.headers;
    } else {
      return this.headers = new HttpHeaders().set('Authorization', 'Bearer '+ this.token)
    }
  }
}
