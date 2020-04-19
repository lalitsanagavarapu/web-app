/** Angular Imports */
import { Component, OnInit } from "@angular/core";
import { ScoreCardService } from "./scorecard.service";
import { Router, ActivatedRoute } from "@angular/router";

/**
 * Create Scorecard Component
 */
@Component({
  selector: "mifosx-scorecard",
  templateUrl: "./scorecard.component.html",
  styleUrls: ["./scorecard.component.scss"],
})
export class ScorecardComponent implements OnInit {
  model = ["Criteria", "Statistical", "Machine Learning"];

  displayedColumns: string[] = ["Category", "Feature", "Score"];
  public dataSource = [];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  public scorecardObj ={
      age: [],
      ageweitage: 0,
      gender: [],
      genderweightage: 0
  };

  // dataTable: [];
  loanId = "";
  loanValues = [];

  constructor(private _scoreCardService: ScoreCardService, private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.getLoans();
  }

  public getLoans() {
    const successcallback = (data) => {
      for (let loan of data["pageItems"]) {
        let det = {
          id: loan["id"],
          clientId: loan["clientId"],
        };
        this.loanValues.push(det);
      }
      //  console.log(JSON.stringify(data['pageItems'][0]));
    };
    this._scoreCardService.getLoan(successcallback);
  }

  public getClientDetails() {
    let clientId = null;

    for (let loan of this.loanValues) {
      if (loan.id === +this.loanId) {
        clientId = loan.clientId;
        break;
      }
    }
    if (clientId) {
      const successcallback = (data) => {
        let dob = data["dateOfBirth"];
        let gender = data["gender"];

        console.log(dob);
        console.log(gender);
        let age =0;
        let gen = '';
        if(dob){
          age = new Date().getFullYear() - dob[0];
        }
        if(gender){
          gen = gender['name'].toUpperCase();
        }
        const successcallbackGen = (datagen) => {
          console.log(datagen);
          // const dx = this.dataTable;
          let res = []


          res.push({
            Category: "Individual",
            Feature: " Age",
            Score: datagen["ageScore"]
          });
          res.push({
            Category: "Individual",
            Feature: " Gender",
            Score: datagen["genderScore"]
          });
          this.dataSource = res;
        };
        this._scoreCardService.getAllScore(successcallbackGen, age,gen);
      };
      this._scoreCardService.getClientDetails(successcallback, clientId);
    }
  }

}

export interface PeriodicElement {
  Category: string;
  Feature: string;
  Score: string;
}

