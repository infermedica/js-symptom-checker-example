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
        template: 'welcome',
        data: null
      },
      {
        template: 'basic',
        data: null
      },
      {
        template: 'symptoms',
        data: {
          symptoms: COMMON_SYMPTOMS,
          allSymptoms: this.api.getSymptoms()
        }
      }
    ];

    // load first step
    this.currentStep = 0;
    this._loadStepTemplate();
  }

  _loadStepTemplate () {
    // TODO: Use promises instead of returning from stepTemplates
    stepTemplates[this.steps[this.currentStep].template](this.steps[this.currentStep].data).then((html) => {
      this.root.querySelector('#step-container').innerHTML = html;
    });
  }

  nextStep () {
    this.currentStep += 1;
    this._loadStepTemplate();
  }
}

export default DemoApp;
