/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureService } from './feature.service';

/**
 * Create Feature Screen Component
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
  
  constructor(private _featureService: FeatureService,private router: Router) { }
  ngOnInit() {

  }

  public submitFeature(){
    const successcallback = (data) => {
      this.router.navigate(['featuredetails']);

    }
    this._featureService.saveFeature(this.featureObject, successcallback);
  }
}
