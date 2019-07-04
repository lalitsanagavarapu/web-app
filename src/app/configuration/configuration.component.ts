/** Angular Imports */
import { Component, OnInit } from '@angular/core';

/**
 * Configuration component. (by office)
 */
@Component({
  selector: 'mifosx-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  productData = ['Agriculture', 'Personal', 'Capital', 'Ratio'];

  categoryData = ['Individual', 'Organisation', 'Country', 'CreditHistory', 'Loan'];

  featureData = ['Age', 'Income', 'Gender'];

  colour1Data = ['Green'];

  colour2Data = ['Amber'];

  colour3Data = ['Red'];
  
  constructor() { }

  ngOnInit() {
  }

}
