/**
 * Created by Tomasz Gabrysiak @ Infermedica on 02/02/2017.
 */

export default class InfermedicaApi {
  constructor(appId, appKey, apiModel = 'infermedica-en', apiUrl = 'https://api.infermedica.com/v3/') {
    this.appId = appId;
    this.appKey = appKey;

    this.apiUrl = apiUrl;
    this.apiModel = apiModel;

    this.interviewId = null;
  }

  generateInterviewId() {
    const uuidv4 = function () {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)); // eslint-disable-line
    };

    this.interviewId = uuidv4();
  }

  request(method, url, data) {
    const headers = new Headers();
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

  get(url) {
    return this.request('GET', url);
  }

  post(url, data) {
    return this.request('POST', url, data);
  }

  getSymptoms(age) {
    return this.get(`symptoms?age.value=${age.value}`);
  }

  getRiskFactors(age) {
    return this.get(`risk_factors?age.value=${age.value}`);
  }

  parse(data) {
    return this.post('parse', JSON.stringify(data));
  }

  getSuggestedSymptoms(data) {
    return this.post('suggest', JSON.stringify(data));
  }

  diagnosis(data) {
    return this.post('diagnosis', JSON.stringify(data));
  }

  explain(data) {
    return this.post('explain', JSON.stringify(data));
  }
}
