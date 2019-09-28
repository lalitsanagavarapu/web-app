declare var window: any;

export const commonValues: any = {
    RESPONSE_SUCCESS_STATUS: '0000'
};

export const ENV_PATH: any = {
    // DEV_URL: 'http://localhost:3000',
    SIT_URL: '',
    UAT_URL: '',
    DEV_URL: ' https://localhost:8443/fineract-provider/api/v1/',
};
// https://localhost:8443/fineract-provider/api/v1/helloworld?tenantIdentifier=default&Authorization=bWlmb3M6cGFzc3dvcmQ=
const SERVICE_URLS_MAP = {
    getAllFeatures : 'feature/getAllFeatures?tenantIdentifier=default&Authorization=bWlmb3M6cGFzc3dvcmQ=',
    saveFeature : 'feature/saveFeature?tenantIdentifier=default',
    getAllConfigs: 'config/getAllConfig?tenantIdentifier=default',
    saveConfig : 'config/saveConfig?tenantIdentifier=default',
    getAllCriterias: 'criteria/getAllCriterias?tenantIdentifier=default',
    saveCriteria : 'criteria/saveCriteria?tenantIdentifier=default',
    getOneFeature: 'feature/getByFeatureId?tenantIdentifier=default',

};

export class Config {

    public static getEnvironmentVariable(value) {
        let environment = window.location.hostname.match('(sit|dev|localhost)')[0];
        environment = environment === 'localhost' ? 'DEV' : environment;
        console.log(environment);
        console.log(ENV_PATH[environment + '_URL'] + SERVICE_URLS_MAP[value]);
        return ENV_PATH[environment + '_URL'] + SERVICE_URLS_MAP[value];
    }
}
