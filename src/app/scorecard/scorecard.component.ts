/** Angular Imports */
import { Component, OnInit } from '@angular/core';

/**
 * Create Scorecard Component
 */
@Component({
  selector: 'mifosx-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.scss']
})
export class ScorecardComponent implements OnInit {

  model = ['Criteria', 'Statistical', 'Machine Learning'];

  displayedColumns: string[] = ['Category', 'Characteristic', 'Score'];

  columnsToDisplay: string[] = this.displayedColumns.slice();

  data: PeriodicElement[] = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {

  }
}

export interface PeriodicElement {
  Category: string;
  Characteristic: string;
  Score: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {Score: '28', Characteristic: 'Age', Category: 'Individual'},
  {Score: '4.5', Characteristic: 'Charac2', Category: '' },
  {Score: 'Agriculture', Characteristic: 'Charac3', Category: ''}
];
