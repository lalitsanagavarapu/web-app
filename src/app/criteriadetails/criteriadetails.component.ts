/** Angular Imports */
import { Component, OnInit } from '@angular/core';

/**
 * Criteria component. 
 */
@Component({
  selector: 'mifosx-criteriadetails',
  templateUrl: './criteriadetails.component.html',
  styleUrls: ['./criteriadetails.component.scss']
})
export class CriteriadetailsComponent implements OnInit {


  public displayedColumns: string[] = ['Feature', 'ValueType', 'DataType', 'Category', 'Status'];
  
  constructor() { }

  ngOnInit() {
  }

}
