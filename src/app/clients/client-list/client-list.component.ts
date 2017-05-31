import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../client.service';
import { Client } from '../client';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  columns = [{ prop: 'siteName', name: 'Site Name' },
             { prop: 'dbName', name: 'Database Name' },
             { prop: 'isActive', name: 'Active' },
             { prop: 'isLive', name: 'Live' },
             { prop: 'siteStatus', name: 'Site Status' },
             { prop: 'clientUid', name: 'Client Uid' },
             { prop: 'hostnames', name: 'Registered Domains' },
             { prop: 'version', name: 'Version' },
             { prop: 'configurationType', name: 'Configuration Type' },
             { prop: 'userName', name: 'Username', minWidth: 250 },
             { prop: 'pingdom', name: 'Pingdom' },
             { prop: 'bucketName', name: 'Bucket Name' },
             { prop: 'groupName', name: 'Group Name' },
             { prop: 'isCloudDataAvailable', name: 'Cloud Data Available' },
             { prop: 'isCloudDataSyncEnabled', name: 'Cloud Data Sync Enabled' }];

  selected:any = [];

  clients: Observable<Client>;
  constructor(private clientService: ClientService,
              private router: Router) { }

  ngOnInit() {
    this.getClients();
  }
  getClients() {
    this.clients = this.clientService.getClients();
  }

  onSelect({ selected }) {
     this.router.navigate(['/clients', selected[0].clientUid]);
  }
}
