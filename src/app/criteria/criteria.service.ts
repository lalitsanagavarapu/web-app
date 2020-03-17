import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../shared/Configuration';
// import { HttpRequestService } from '../shared/services/http-request.service';
import { HttpRequestService } from 'app/shared/HttpRequestService';
@Injectable()
export class CriteriaService {

    constructor(private _httpService: HttpRequestService, private _router: Router) { }

    public saveCriteria(criteriaObj, successcallback) {
        let responseObject: any;
        const request = {
            feature: criteriaObj.feature,
            category:criteriaObj.category,
            product:criteriaObj.product,
            datasource:criteriaObj.datasource,
            keyvalue:criteriaObj.keyvalue,
            sqlapi : criteriaObj.sqlapi
        }
        this._httpService.postRequest(Config.getEnvironmentVariable('saveCriteria'), request)
            .subscribe(
                (data) => {
                    responseObject = data;
                    successcallback(responseObject);
                },
                (error) => console.log('err'),
                () => {
                    console.log('success ');
                }
            );
    }

    public getOneCriteria(criteriaId, successcallback) {
        let responseObject: any; 
        const request = {
            id : criteriaId
        }
        this._httpService.postRequest(Config.getEnvironmentVariable('getOneCriteria'), request)
            .subscribe(
                (data) => {
                    responseObject = data; 
                    successcallback(responseObject);
                },
                (error) => console.log('err'),
                () => {
                    console.log('success');
                }
            );
    }
}