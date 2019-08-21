/** Angular Imports */
import { Component, OnInit } from '@angular/core';

/**
 * Configuration component. (by office)
 */
@Component({
  selector: 'mifosx-configurationdetails',
  templateUrl: './configurationdetails.component.html',
  styleUrls: ['./configurationdetails.component.scss']
})
export class ConfigurationdetailsComponent implements OnInit {


  public displayedColumns: string[] = ['Feature', 'ValueType', 'DataType', 'Category', 'Status'];
  
  constructor() { }

  ngOnInit() {
  }

  
}
