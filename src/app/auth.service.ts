import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { LOCAL_STORAGE } from './app.const';

@Injectable()
export class AuthService {
  public token: string;
  public redirectUrl: string;

  private loginPostUrl: string = 'https://q4setup.q4.local/token';

  constructor(private http: Http) {
    var currentUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE.currentUser));
    this.token = currentUser && currentUser.access_token;
  }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(this.loginPostUrl, `grant_type=password&username=${username}&password=${password}&client_id=Q4SetupApp`, options)
    .map(this.handleResponse).catch(this.handleError);
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
        localStorage.setItem(LOCAL_STORAGE.currentUser, JSON.stringify({ username: data.userName, token: token }));

        // return true to indicate successful login
        return true;
    } else {
        // return false to indicate failed login
        return false;
    }
  }
  logout(): void {
    this.token = null;
    localStorage.removeItem(LOCAL_STORAGE.currentUser);
  }

  isLoggedIn(): boolean {
    let currentUser = localStorage.getItem(LOCAL_STORAGE.currentUser);
    return typeof currentUser !== "undefined";
  }
}
