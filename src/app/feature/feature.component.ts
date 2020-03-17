/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    id: null,
    feature: '',
    valueType: '',
    dataType: '',
    category: '',
    status: ''
  };

  constructor(private _featureService: FeatureService,private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    let id = null;
    this.route.params.subscribe (
      params => {
        id = params['id'];
      }
    );
    if(id){
      this.getById(id);

    }
  }

  public submitFeature(){
    const successcallback = (data) => {
      this.router.navigate(['featuredetails']);
    }
    this._featureService.saveFeature(this.featureObject, successcallback);
  }

  public getById(id)
  {
    const successcallback = (data) => {
     this.featureObject.category = data['category'];
     this.featureObject.dataType = data['data'];
     this.featureObject.feature = data['feature'];
     this.featureObject.valueType = data['value'];
     this.featureObject.id = data['id'];
     this.featureObject.status = data['status'];

    //  console.log(JSON.stringify(this.featureObject));

    }
    this._featureService.getOneFeature( id, successcallback);
  }
}
