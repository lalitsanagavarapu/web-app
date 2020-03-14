/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { ConfigService } from './configuration.service';
import { Router, ActivatedRoute } from '@angular/router';


/**
 * Configuration component.
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

  minData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  maxData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];


  public configurationObj = {
    feature : '',
    category: '',
    product : '',
    weightage : '',
    colour1: 'Green',
    greenmin: '',
    greenmax: '',

    colour2: 'Amber',
    ambermin: '',
    ambermax: '',

    colour3: 'Red',
    redmin: '',
    redmax: '',
    id: ''
  };

  constructor(private _configService: ConfigService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = null;
    this.route.params.subscribe (
      params => {
        id = params['id'];
      }
    );
    if(id){
      this.getById(id);
      this.configurationObj.id = id;

    }
  }

  public submitFeature(){
    // console.log(JSON.stringify(this.configurationObj));
    const successcallback = (data) => {
      this.router.navigate(['configurationdetails'])
    }
    this._configService.saveConfig(this.configurationObj, successcallback);
  }
  public getById(id){
    const successcallback = (data) => {
    //  console.log(JSON.stringify(data));

     this.configurationObj.ambermax = data['ambermax'];
     this.configurationObj.feature = data['feature'];
     this.configurationObj.product = data['product'];
     this.configurationObj.category = data['category'];
     this.configurationObj.weightage = data['weightage'];
     this.configurationObj.greenmax = data['greenmax'];
     this.configurationObj.greenmin = data['greenmin'];
     this.configurationObj.redmax = data['redmax'];
     this.configurationObj.redmin = data['redmin'];
     this.configurationObj.ambermin = data['ambermin'];
    //  this.configurationObj.colour1 = 'Green';
    //  this.configurationObj.colour2 = 'Amber';
    //  this.configurationObj.colour3 = 'Red';

    }
    this._configService.getOneFeature( id, successcallback);
  }

}
