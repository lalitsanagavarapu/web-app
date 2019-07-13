/** Angular Imports */
import { Component, OnInit } from '@angular/core';

/**
 * Create Feature Component
 */
@Component({
  selector: 'mifosx-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  valueData = ['Binary', 'Nominal', 'Interval', 'Ratio'];

  dataData = ['Numeric', 'Character', 'Date'];

  categoryData = ['Individual', 'Organisation', 'Country', 'CreditHistory', 'Loan'];
  
  constructor() { }

  ngOnInit() {

  }
}
