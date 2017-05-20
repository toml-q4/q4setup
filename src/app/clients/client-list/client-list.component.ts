import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../client';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Observable<Client>;
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
  }
  getClients() {
    this.clients = this.clientService.getClients();
  }
}
