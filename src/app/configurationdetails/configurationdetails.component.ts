/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { ConfigDetailsService } from './configurationdetails.service.component';

/**
 * Configuration component. (by office)
 */
@Component({
  selector: 'mifosx-configurationdetails',
  templateUrl: './configurationdetails.component.html',
  styleUrls: ['./configurationdetails.component.scss']
})
export class ConfigurationdetailsComponent implements OnInit {


  public displayedColumns: string[] = ['Feature', 'Category', 'Product',
   'Weightage', 'Green', 'Amber', 'Red'];
  public dataSource = [];
  constructor(private _configDetails: ConfigDetailsService) { }

  ngOnInit() {

    const allConfigs = (data) => {
      this.dataSource = data;
    }
    this._configDetails.getAllConfigs(allConfigs);
  }

  
}
