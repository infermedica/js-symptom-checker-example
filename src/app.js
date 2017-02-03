/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

// eslint-disable-next-line no-unused-vars
import s from './styles/styles.css';
import config from './config.js';
import InfermedicaApi from './infermedica-api';
import template from './templates/base';
import stepTemplates from './templates/steps';

class DemoApp {
  constructor (root) {
    this.root = root;
    root.innerHTML = template;

    this.nextButton = this.root.querySelector('#next-step');
    this.nextButton.addEventListener('click', e => this.nextStep(e));

    this.api = new InfermedicaApi(
      config.API_URL,
      config.API_MODEL,
      config.API_APP,
      config.API_KEY
    );

    // this.api.getSymptoms().then(data => console.log(data));

    const COMMON_SYMPTOMS = ['s_21', 's_1190', 's_98', 's_119', 's_88', 's_13', 's_156', 's_285', 's_241'];

    this.steps = [
      {
        template: 'welcome'
      },
      {
        template: 'basic'
      },
      {
        template: 'symptoms'
      }
    ];

    // load first step
    this.currentStep = 0;
    this._loadStepTemplate();
  }

  _loadStepTemplate () {
    this.root.querySelector('#step-container').innerHTML = stepTemplates[this.steps[this.currentStep].template]();
  }

  nextStep () {
    this.currentStep += 1;
    this._loadStepTemplate();
  }
}

export default DemoApp;
