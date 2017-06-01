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
  selected:any = [];
  clients: Client[];
  temp: Client[];
  constructor(private clientService: ClientService,
              private router: Router) { }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientService.getClients().subscribe(clients => {
      this.clients = clients;
      this.temp = [...clients];
    }); ;
  }

  onSelect({ selected }) {
     this.router.navigate(['/clients', selected[0].clientUid]);
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function(d) {
      return d.siteName.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.clients = temp;
  }
}
