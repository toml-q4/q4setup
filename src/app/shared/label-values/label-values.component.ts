import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'label-values',
  templateUrl: './label-values.component.html',
  styleUrls: ['./label-values.component.css']
})
export class LabelValuesComponent implements OnInit {
  @Input('label') label: string;
  @Input('values') value: string[];
  constructor() { }

  ngOnInit() {
  }

}
