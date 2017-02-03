/**
 * Created by Tomasz Gabrysiak @ Infermedica on 02/02/2017.
 */

export default class InfermedicaApi {
  constructor (apiUrl, apiModel, appId, appKey) {
    console.log('InfermedicaApi::constructor');
    this.apiUrl = apiUrl;
    this.apiModel = apiModel;
    this.appId = appId;
    this.appKey = appKey;
  }

  _req (method, url, payload) {
    return new Promise((resolve, reject) => {
      /* global XMLHttpRequest */
      let req = new XMLHttpRequest();

      req.open(method, this.apiUrl + url, true);
      req.setRequestHeader('App-Id', this.appId);
      req.setRequestHeader('App-Key', this.appKey);
      req.setRequestHeader('Model', this.apiModel);
      req.setRequestHeader('Content-Type', 'application/json');

      req.onload = function () {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(new Error(req.statusText));
        }
      };

      req.onerror = function () {
        reject(new Error('Network error'));
      };

      req.send();
    });
  }

  _get (url) {
    return this._req('GET', url);
  }

  getSymptoms () {
    console.log('InfermedicaApi::getSymptoms');
    return this._get('symptoms').then(JSON.parse);
  }

  getRiskFactors () {
    console.log('InfermedicaApi::getRiskFactors');
    return this._get('risk_factors').then(JSON.parse);
  }

}
