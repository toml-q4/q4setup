import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Http, Headers, RequestOptions, Response } from '@angular/http';

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
    .map(this.handleResponse).catch(this.handleError);
  }

  private handleError(response: Response) {
    var message = response.json().message;
    this.isAuthenticated = true;

    return new Observable(message);

  }

  handleResponse(response: Response) {
    if (response) return true;

    return false;
  }
  logout(): void {
    this.isAuthenticated = false;
  }
}
