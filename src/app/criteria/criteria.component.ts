/** Angular Imports */
import { Component, OnInit } from '@angular/core';

/**
 * Create Criteria Component
 */
@Component({
  selector: 'mifosx-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  dataSource = ['XML', 'JSON', 'SQL'];

  displayedColumns: string[] = ['Criteria', 'Score'];

  columnsToDisplay: string[] = this.displayedColumns.slice();

  data: PeriodicElement[] = ELEMENT_DATA;

  addColumn() {
    const randomColumn = Math.floor(Math.random() *
    this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  // addRow() {
  //   const randomRow = Math.floor(Math.random() *
  //   this.displayedRows.length);
  //   this.rowsToDisplay.push(this.displayedRows[randomRow]);
  // }

  removeColumn() {
    if(this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  constructor() { }

  ngOnInit() {

  }
}

export interface PeriodicElement {
  Criteria: string;
  Score: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Score: 'cell1', Criteria: 'cell2'},
  {Score: 'cell2', Criteria: 'cell3'},
];


