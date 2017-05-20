import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Client } from './client';
import { ClientDetails } from './client-details';

@Injectable()
export class ClientService {

  constructor(private http: Http) { }

  getClients() {
    return this.http.get('assets/api/clients.json')
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
