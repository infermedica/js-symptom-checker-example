/**
 * Created by Tomasz Gabrysiak @ Infermedica on 02/02/2017.
 */

import config from './config.js';
import InfermedicaApi from './infermedica-api';

const api = new InfermedicaApi(
  config.API_URL,
  config.API_MODEL,
  config.API_APP,
  config.API_KEY
);

api.getSymptoms().then((data) => { console.log(data); });

api.getRiskFactors().then((data) => { console.log(data); });

api.parse('I got a fever').then((data) => { console.log(data); });
