import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { Client } from './client';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: Array<Client>;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }
  getClients() {
    this.clientService.getClients()
    .subscribe(
      clients => this.clients = clients
    );
  }
}
