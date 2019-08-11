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

  displayedColumns: string[] = ['Category', 'Feature', 'Score'];

  columnsToDisplay: string[] = this.displayedColumns.slice();

  data: PeriodicElement[] = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {

  }
}

export interface PeriodicElement {
  Category: string;
  Feature: string;
  Score: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  {Score: '28', Feature: 'Age', Category: 'Individual'},
  {Score: '4.5', Feature: 'Charac2', Category: '' },
  {Score: 'Agriculture', Feature: 'Charac3', Category: ''}
];
