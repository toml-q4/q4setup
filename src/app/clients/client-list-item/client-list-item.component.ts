import { Component, Input, OnInit } from '@angular/core';
import { Client } from '../client';
@Component({
  selector: 'client-list-item',
  templateUrl: './client-list-item.component.html',
  styleUrls: ['./client-list-item.component.css']
})
export class ClientListItemComponent implements OnInit {
  @Input() client: Client;
  constructor() { }

  ngOnInit() {
  }

}
