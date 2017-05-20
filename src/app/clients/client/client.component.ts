import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientDetails } from '../client-details';
import { ClientService } from '../client.service';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  clientDetails: ClientDetails;
  clientUid: string;
  constructor(private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {
    if (!this.clientDetails) {
      this.route
        .params
        .map(params => params['id'])
        .do(clientUid => this.clientUid = clientUid)
        .subscribe(clientUid => this.getClient());
    }
  }

  private getClient() {
    this.clientService.getClient(this.clientUid)
    .subscribe(clientDetails => this.clientDetails = clientDetails);
  }

}
