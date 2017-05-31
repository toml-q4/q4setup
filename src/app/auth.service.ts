import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { LOCAL_STORAGE, URLS } from './auth.service.const';

@Injectable()
export class AuthService {
  public redirectUrl: string;

  // observable boolean source
  private loginStatusSource = new Subject<boolean>();

  // observable boolean stream
  loginStream$ = this.loginStatusSource.asObservable();

  constructor(private http: Http) {
  }

  logout(): void {
    localStorage.removeItem(LOCAL_STORAGE.token);
    this.loginStatusSource.next(false);
  }

  login(username: string, password: string): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(URLS.token, `grant_type=password&username=${username}&password=${password}&client_id=Q4SetupApp`, options)
                    .map(this.handleResponse)
                    .do(() => { this.loginStatusSource.next(true); })
                    .catch(this.handleError);                  
  }
  
  private handleError(response: Response) {
    var message = response.json().message;
    return new Observable(message);
  }

  private handleResponse(response: Response) {
    if (response && response != null) {
      let data = response.json();
      if (data){
        localStorage.setItem(LOCAL_STORAGE.token, data.access_token);
        localStorage.setItem(LOCAL_STORAGE.refresh_token, data.refresh_token);
        return true;
      }
    }
    return false;
  }
  
  isLoggedIn(): boolean {
    let token = localStorage.getItem(LOCAL_STORAGE.token); 
    return  token !== null && token !== undefined;
  }

  getToken() {
    return localStorage.getItem(LOCAL_STORAGE.token);
  }

  refreshToken(){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(URLS.token, `grant_type=refresh_token&refresh_token=${localStorage.getItem(LOCAL_STORAGE.refresh_token)}&client_id=Q4SetupApp`, options)
                    .map((response: Response) => {
                      console.log(response);
                      if (response && response != null) {
                        let data = response.json();
                        if (data){
                          localStorage.setItem(LOCAL_STORAGE.token, data.access_token);
                          localStorage.setItem(LOCAL_STORAGE.refresh_token, data.refresh_token);
                          return true;
                        }
                      }
                      return false;
                    })                    
                    .catch(this.handleError);
  }
}
