/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CriteriaService } from './criteria.service';

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

  productData = ['Agriculture', 'Personal', 'Capital', 'Ratio'];

  categoryData = ['Individual', 'Organisation', 'Country', 'CreditHistory', 'Loan'];

  featureData = ['Age', 'Income', 'Gender'];

  displayedColumns: string[] = ['Criteria', 'Score'];

  columnsToDisplay: string[] = this.displayedColumns.slice();

  data: PeriodicElement[] = ELEMENT_DATA;

  addRow() {
    const randomColumn = Math.floor(Math.random() *
    this.displayedColumns.length);
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeRow() {
    if(this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  public criteriaObject = {
    feature: '',
    category: '',
    product: '',
    datasource: '',
    keyvalue: '',
    sqlapi : ''
  };
  constructor(private _criteriaService: CriteriaService, private router: Router) { }

  ngOnInit() {

  }

  public submitCriteria(){
    console.log(JSON.stringify(this.criteriaObject));
    const successcallback = (data) => {
      this.router.navigate(['criteriadetails'])
    }
    this._criteriaService.saveCriteria(this.criteriaObject, successcallback);
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


