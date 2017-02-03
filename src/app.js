/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

// eslint-disable-next-line no-unused-vars
import s from './styles/styles.css';
import config from './config.js';
import InfermedicaApi from './infermedica-api';
import template from './templates/base';

class DemoApp {
  constructor (root) {
    root.innerHTML = template;

    this.api = new InfermedicaApi(
      config.API_URL,
      config.API_MODEL,
      config.API_APP,
      config.API_KEY
    );
  }
}

export default DemoApp;
