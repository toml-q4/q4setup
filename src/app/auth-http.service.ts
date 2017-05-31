import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthHttpService {

  constructor(private http: Http, private authService: AuthService) { }

  createAuthorizationHeader(headers: Headers) {
    let token = this.authService.getToken();
    headers.append('Authorization', `Bearer ${token}`); 
  }

  public get(url: string) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get(url, { headers: headers });
  }
}
