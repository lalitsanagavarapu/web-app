import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Config } from '../shared/Configuration';
import { HttpRequestService } from 'app/shared/HttpRequestService';
@Injectable()
export class FeatureService {

    constructor(private _httpService: HttpRequestService, private _router: Router) { }

    public saveFeature(featureObj, successcallback) {
        let responseObject: any;
        const request = {
            feature: featureObj.feature,
            valueType: featureObj.valueType,
            dataType: featureObj.dataType,
            category: featureObj.category,
            status : featureObj.status
        }
        this._httpService.postRequest(Config.getEnvironmentVariable('saveFeature'), request)
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