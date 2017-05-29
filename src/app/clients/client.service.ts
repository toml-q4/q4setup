import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { AuthService } from '../auth.service';

import { Observable } from 'rxjs/Observable';
import { Client } from './client';
import { ClientDetails } from './client-details';

@Injectable()
export class ClientService {
  constructor(private http: Http, private authService: AuthService) { }

  createAuthorizationHeader(headers: Headers) {
    var currentUser = localStorage.getItem('currentUser');

    headers.append('Authorization', `Bearer ${this.authService.token}`); 
  }

  getClients() {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);

    return this.http.get('https://q4setup.q4.local/api/ClientInstances?searchTerm=', { headers: headers })
    .map((response: Response) => <Client[]>response.json())
    .catch(this.handleError);
  }

  getClient(clientUid: string) {
    return this.http.get('assets/api/client.json')
    .map((response: Response) => <ClientDetails>response.json())
    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}