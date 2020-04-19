import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpRequestService } from "app/shared/HttpRequestService";
import { Config } from "app/shared/Configuration";
@Injectable()
export class ScoreCardService {

  constructor(private _httpService: HttpRequestService, private _router: Router) {}
  public getLoan(successcallback) {
    let responseObject: any;
    this._httpService
      .getRequest("https://demo.mifos.io/fineract-provider/api/v1/loans?tenantIdentifier=default&pretty=true")
      .subscribe(
        (data) => {
          responseObject = data;
          successcallback(responseObject);
        },
        (error) => console.log("err"),
        () => {
          console.log("success ");
        }
      );
  }
  public getClientDetails(successcallback, loanId) {
    let responseObject: any;
    this._httpService
      .getRequest(
        "https://demo.mifos.io/fineract-provider/api/v1/clients/" + loanId + "?tenantIdentifier=default&pretty=true"
      )
      .subscribe(
        (data) => {
          responseObject = data;
          successcallback(responseObject);
        },
        (error) => console.log("err"),
        () => {
          console.log("success ");
        }
      );
  }

  public getAllScore(successcallback, ag, gen) {
    let reObject = {
      age: ag,
      gender: gen,
    };

    let responseObject: any;
    this._httpService.postRequest(Config.getEnvironmentVariable("getScore"), reObject).subscribe(
      (data) => {
        responseObject = data;
        successcallback(responseObject);
      },
      (error) => console.log("err"),
      () => {
        console.log("success ");
      }
    );
  }


}
