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

  public featureObject = {
    feature: '',
    valueType: '',
    dataType: '',
    category: '',
    status: ''
  }
  
  // public featureitems = [];
  constructor() { }

  ngOnInit() {

  }

  public submitFeature(){
    console.log(JSON.stringify(this.featureObject));
    localStorage.setItem('featureObj', JSON.stringify(this.featureObject));
  }
}
