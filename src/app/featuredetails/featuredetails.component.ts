/** Angular Imports */
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';



@Component({
  selector: 'mifosx-featuredetails',
  templateUrl: './featuredetails.component.html',
  styleUrls: ['./featuredetails.component.scss']
})
export class FeaturedetailsComponent implements OnInit {

  displayedColumns: string[] = ['Feature', 'ValueType', 'DataType', 'Category', 'Status']
  // public dataSource = [];
  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem('featureObj'));
    // let x = {
    //   "feature":"jai","valueType":"Interval","dataType":"Character","category":"Loan","status":true
    // }
    // this.dataSource.push(x);
  }

}

