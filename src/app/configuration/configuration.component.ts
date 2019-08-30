/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { ConfigService } from './configuration.service';
import { Router } from '@angular/router';

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
    colour1: '',
    greenmin: '',
    greenmax: '',

    colour2: '',
    ambermin: '',
    ambermax: '',

    colour3: '',
    redmin: '',
    redmax: '',
  };
  
  constructor(private _configService: ConfigService, private router: Router) { }

  ngOnInit() {
    
  }

  public submitFeature(){
    console.log(JSON.stringify(this.configurationObj));
    const successcallback = (data) => {
      this.router.navigate(['configurationdetails'])
    }
    this._configService.saveConfig(this.configurationObj, successcallback);
  }

}
