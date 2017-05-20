import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

export class LoginResponse {
  constructor(
    public access_token: string,
    public token_type: string,
    public expires_in: number,
    public refresh_token: string
  ){}
}

@Injectable()
export class AuthService {
  isAuthenticated: Boolean = false;
  redirectUrl: string;

  private loginPostUrl: string = 'https://q4setup.q4.local/token';

  constructor(private http: Http) {}

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.loginPostUrl, `grant_type=password&username=${username}&password=${password}&client_id=Q4SetupApp`, options)
    .map(this.handleResponse);
  }
  handleResponse(response: Response) {
    if (response) return true;

    return false;
  }
  logout(): void {
    this.isAuthenticated = false;
  }
}
