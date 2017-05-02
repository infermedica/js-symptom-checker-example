/**
 * Created by Tomasz Gabrysiak @ Infermedica on 02/02/2017.
 */

export default class InfermedicaApi {
  constructor (appId, appKey, apiModel = 'infermedica-en', apiUrl = 'https://api.infermedica.com/v2/') {
    this.appId = appId;
    this.appKey = appKey;

    this.apiUrl = apiUrl;
    this.apiModel = apiModel;
  }

  _req (method, url, data) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();

      req.open(method, this.apiUrl + url, true);
      req.setRequestHeader('App-Id', this.appId);
      req.setRequestHeader('App-Key', this.appKey);
      req.setRequestHeader('Model', this.apiModel);
      req.setRequestHeader('Content-Type', 'application/json');

      req.onload = () => {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(new Error(req.statusText));
        }
      };

      req.onerror = () => {
        reject(new Error('Network error'));
      };

      req.send(data);
    });
  }

  _get (url) {
    return this._req('GET', url);
  }

  _post (url, data) {
    return this._req('POST', url, data);
  }

  getSymptoms () {
    return this._get('symptoms').then(JSON.parse);
  }

  getRiskFactors () {
    return this._get('risk_factors').then(JSON.parse);
  }

  parse (text) {
    return this._post('parse', JSON.stringify({'text': text})).then(JSON.parse);
  }

  diagnosis (data) {
    return this._post('diagnosis', JSON.stringify(data)).then(JSON.parse);
  }

  explain (data) {
    return this._post('explain', JSON.stringify(data)).then(JSON.parse);
  }
}
