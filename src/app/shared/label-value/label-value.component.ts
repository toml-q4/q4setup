import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'label-value',
  templateUrl: './label-value.component.html',
  styleUrls: ['./label-value.component.css']
})
export class LabelValueComponent implements OnInit {
  @Input('label') label: string;
  @Input('value') value: string;

  constructor() { }

  ngOnInit() {
  }

}
