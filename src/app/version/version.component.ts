import { Component, OnInit } from '@angular/core';
import { ClientService } from '../clients/client.service';
import { Client } from '../clients/client-list/models/client';

@Component({
  selector: 'version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss', '../../../node_modules/dragula/dist/dragula.css']
})
export class VersionComponent implements OnInit {
  clients: Client[];
  previousClients: Client[];
  nextClients: Client[];
  constructor(private clientService: ClientService) {
   
  }

  ngOnInit() {
    this.clientService.getClients()
    .subscribe(clients => this.clients = clients);
  }
  save() {
    alert('saved');
  }
}
