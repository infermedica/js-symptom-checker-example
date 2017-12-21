/**
 * Created by Tomasz Gabrysiak @ Infermedica on 02/02/2017.
 */

export default class InfermedicaApi {
  constructor (appId, appKey, apiModel = 'infermedica-en', apiUrl = 'https://api.infermedica.com/v2/') {
    this.appId = appId;
    this.appKey = appKey;

    this.apiUrl = apiUrl;
    this.apiModel = apiModel;

    this.interviewId = null;
  }

  generateInterviewId () {
    let uuidv4 = function () {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
    };

    this.interviewId = uuidv4();
  }

  _req (method, url, data) {
    let headers = new Headers();
    headers.append('App-Id', this.appId);
    headers.append('App-Key', this.appKey);
    headers.append('Model', this.apiModel);
    headers.append('Content-Type', 'application/json');

    if (this.interviewId) {
      headers.append('Interview-Id', this.interviewId);
    }

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
