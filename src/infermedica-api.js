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
    let headers = new Headers();
    headers.append('app-id', this.appId);
    headers.append('app-key', this.appKey);
    headers.append('model', this.apiModel);
    headers.append('content-type', 'application/json');

    return fetch(this.apiUrl + url, {
      method,
      headers,
      body: data
    }).then((response) => {
      return response.json();
    });
  }

  _get (url) {
    return this._req('GET', url);
  }

  _post (url, data) {
    return this._req('POST', url, data);
  }

  getSymptoms () {
    return this._get('symptoms');
  }

  getRiskFactors () {
    return this._get('risk_factors');
  }

  parse (text) {
    return this._post('parse', JSON.stringify({'text': text}));
  }

  getSuggestedSymptoms (data) {
    return this._post('suggest', JSON.stringify(data));
  }

  diagnosis (data) {
    return this._post('diagnosis', JSON.stringify(data));
  }

  explain (data) {
    return this._post('explain', JSON.stringify(data));
  }
}
