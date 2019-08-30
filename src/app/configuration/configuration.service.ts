import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../shared/Configuration';
// import { HttpRequestService } from '../shared/services/http-request.service';
import { HttpRequestService } from 'app/shared/HttpRequestService';
@Injectable()
export class ConfigService {

    constructor(private _httpService: HttpRequestService, private _router: Router) { }

    public saveConfig(criteriaObj, successcallback) {
        let responseObject: any;
        const request = {
            feature : criteriaObj.feature,
            category: criteriaObj.category,
            product : criteriaObj.product,
            weightage : criteriaObj.weightage,
            // colour1: criteriaObj.feature,
            greenmin: criteriaObj.greenmin,
            greenmax: criteriaObj.greenmax,
        
            // colour2: criteriaObj.feature,
            ambermin: criteriaObj.ambermin,
            ambermax: criteriaObj.ambermax,
        
            // colour3: criteriaObj.feature,
            redmin: criteriaObj.redmin,
            redmax: criteriaObj.redmax,
           
        }
        this._httpService.postRequest(Config.getEnvironmentVariable('saveConfig'), request)
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
}