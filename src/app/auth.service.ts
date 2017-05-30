import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { LOCAL_STORAGE, URLS } from './auth.service.const';

@Injectable()
export class AuthService {
  public redirectUrl: string;

  constructor(private http: Http) {
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
    if (response) {
      localStorage.setItem(LOCAL_STORAGE.token, response.json().access_token);
      return true;
    }
    return false;
  }
  logout(): void {
    localStorage.removeItem(LOCAL_STORAGE.token);
  }

  isLoggedIn(): boolean {
    let token = localStorage.getItem(LOCAL_STORAGE.token); 
    return  token !== null && token !== undefined;
  }

  getToken() {
    return localStorage.getItem(LOCAL_STORAGE.token);
  }
}
