/** Angular Imports */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CriteriaService } from './criteria.service';
import { MatTableDataSource } from '@angular/material';

/**
 * Create Criteria Component
 */
@Component({
  selector: 'mifosx-criteria',
  templateUrl: './criteria.component.html',
  styleUrls: ['./criteria.component.scss']
})
export class CriteriaComponent implements OnInit {

  dataSource = ['XML', 'JSON', 'SQL'];

  productData = ['Agriculture', 'Personal', 'Capital', 'Ratio'];


  featureData = [];

  displayedColumns: string[] = ['criteria', 'score'];
  dataTable: MatTableDataSource<CriteriaScoreElement>;
  // columnsToDisplay: string[] = this.displayedColumns.slice();

  // ELEMENT_DATA: PeriodicElement[] = [
  //   {Score: 'cell1', Criteria: 'cell2'},
  //   {Score: 'cell2', Criteria: 'cell3'},
  //   {Score: 'cell1', Criteria: 'cell2'}
  // ];
  // data: PeriodicElement[] = this.ELEMENT_DATA;

  public criteriaObject = {
    feature: '',
    category: '',
    product: '',
    datasource: '',
    keyvalue: '',
    sqlapi : '',
    scoreCriteria: []
  };
  constructor(private _criteriaService: CriteriaService, private router: Router) {
//     const tabledata: CriteriaScoreElement[] = [];
//     let testData: CriteriaScoreElement ={
//       criteria: 'Age',
//       score: '0'
//     };
// tabledata.push(testData);
//     this.dataTable = new MatTableDataSource(tabledata);
    this.criteriaObject.scoreCriteria.push({
      criteria: 'Age',
      score: '0',
      id: null
    });
    // this.dataTable.data.push({score: 'cell1', criteria: 'cell2'});
  }

  ngOnInit() {
    this.getFeatureCategory();
  }
  addRow() {
    console.log(JSON.stringify(this.criteriaObject.scoreCriteria));
    this.criteriaObject.scoreCriteria.push(
      {score: 'cell1', criteria: 'cell2', id: null}
    );
    console.log(JSON.stringify(this.criteriaObject.scoreCriteria));
    // this.dataTable.data.push({score: 'cell1', criteria: 'cell2'});
    // this.dataTable.filter="";
    // console.log(JSON.stringify(this.dataTable));
  }

  removeRow() {
    if(this.dataTable.data.length){
      this.dataTable.data.pop();
    }
    this.dataTable.filter="";
  }


  public getFeatureCategory() {
    const successcallback = data => {
      // this.featureData = data;
      for(let feat of data){
        // console.log(feat);
        // console.log(JSON.parse(feat));
        let single ={
          id: JSON.parse(feat)['id'],
          feature: JSON.parse(feat)['feature'],
          category: JSON.parse(feat)['category']
        };
        console.log(single);
        this.featureData.push(single);
      }
      // console.log(data);
      // console.log(JSON.stringify(data));
    };
    this._criteriaService.getCategoryFeature(successcallback);
  }

  public onFeatureSelection(){
    let y =this.featureData.filter((feat) =>  feat.feature === this.criteriaObject.feature);
    // this.featureData.forEach(x-> x.feature===this.criteriaObject.feature)
    this.criteriaObject.category = y[0].category;
    console.log(y);
  }

  public submitCriteria(){
    console.log(JSON.stringify(this.criteriaObject));
    const successcallback = (data) => {
      this.router.navigate(['criteriadetails'])
    }
    this._criteriaService.saveCriteria(this.criteriaObject, successcallback);
  }
}

export interface CriteriaScoreElement {
  criteria: string;
  score: string;

}




