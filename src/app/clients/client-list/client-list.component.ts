import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../client.service';
import { ClientListItemComponent } from '../client-list-item/client-list-item.component';
import { Client } from '../client';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  columns = [{ prop: 'siteName', name: 'Site Name' },
             { prop: 'dbName', name: 'Database Name'},
             { prop: 'isActive', name: 'Active'},
             { prop: 'isLive', name: 'Live'},
             { prop: 'siteStatus', name: 'Site Status'}]; 

  clients: Observable<Client>;
  constructor(private clientService: ClientService,
              private router: Router) { }

  ngOnInit() {
    this.getClients();
  }
  getClients() {
    this.clients = this.clientService.getClients();
  }

  onSelect(clientUid: string) {
    this.router.navigate(['/clients', clientUid]);
  }
}
