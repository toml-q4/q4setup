import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientService } from '../client.service';
import { Client } from './models/client';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
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
