/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { CriteriaDetailsService } from './criteriadetails.service';

/**
 * Criteria component. 
 */
@Component({
  selector: 'mifosx-criteriadetails',
  templateUrl: './criteriadetails.component.html',
  styleUrls: ['./criteriadetails.component.scss']
})
export class CriteriadetailsComponent implements OnInit {

  public dataSource = [];
  public displayedColumns: string[] = ['Feature', 
  'Category', 'Product', 'DataSource', 'SqlApi', 'Key'];
  
  constructor(private _criteriaService: CriteriaDetailsService) { }

  ngOnInit() {
    const allCriterias = (data) => {
      console.log(JSON.stringify(data));
      this.dataSource = data;
    }
    this._criteriaService.getAllCriterias(allCriterias);
  }

}
