import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
  isAuthenticated: Boolean = false;
  redirectUrl: string;

  login(): Observable<boolean> {
    return Observable.of(true).do(val => this.isAuthenticated = true);
  }

  logout(): void {
    this.isAuthenticated = false;
  }
}
