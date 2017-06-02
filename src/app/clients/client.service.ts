import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { AuthHttpService } from '../auth-http.service';

import { Observable } from 'rxjs/Observable';
import { Client } from './client-list/models/client';
import { ClientDetails } from './client/models/client-details';

@Injectable()
export class ClientService {
  constructor(private http: AuthHttpService) { }

  getClients() {
    let url = 'https://q4setup.q4.local/api/ClientInstances?searchTerm=';
    //url = 'assets/api/clients.json';
    return this.http.get(url)
                    .map((response: Response) => <Client[]>response.json())
                    .catch(this.handleError);
  }

  getClient(clientUid: string) {
    let url = `https://q4setup.q4.local/api/WebsiteEditing/GetSiteEditViewModel?clientUid=${clientUid}`;
    //url = 'assets/api/client.json';
    return this.http.get(url)
                    .map((response: Response) => <ClientDetails>response.json())
                    .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error(error);
    let msg = `Error status code ${error.status} at ${error.url}`;
    return Observable.throw(msg);
  }
}