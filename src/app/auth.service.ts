import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';

import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { LOCAL_STORAGE, URLS } from './auth.service.const';

@Injectable()
export class AuthService {
  public token: string;
  public redirectUrl: string;

  constructor(private http: Http) {
    this.token = localStorage.getItem(LOCAL_STORAGE.token);
  }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(URLS.token, `grant_type=password&username=${username}&password=${password}&client_id=Q4SetupApp`, options)
                    .map(this.handleResponse)
                    .catch(this.handleError);
  }

  private handleError(response: Response) {
    var message = response.json().message;
    return new Observable(message);
  }

  handleResponse(response: Response) {
    var data = response.json();
    let token = data && data.access_token;
    if (token) {
        // set token property
        this.token = token;

        // store username and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem(LOCAL_STORAGE.token, token);
        localStorage.setItem(LOCAL_STORAGE.token_username, data.userName);
        // return true to indicate successful login
        return true;
    } else {
        // return false to indicate failed login
        return false;
    }
  }
  logout(): void {
    this.token = null;
    localStorage.removeItem(LOCAL_STORAGE.token)
    localStorage.removeItem(LOCAL_STORAGE.token_username);
  }

  isLoggedIn(): boolean {
    return tokenNotExpired();
  }
}
