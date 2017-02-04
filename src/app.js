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
    const LOCATION_RISK_FACTORS = [
      'p_15', 'p_20', 'p_21', 'p_16', 'p_17', 'p_18', 'p_14', 'p_19', 'p_22', 'p_13'
    ];
    const COMMON_RISK_FACTORS = [
      'p_8', 'p_9', 'p_10', 'p_28'
    ];

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
      },
      {
        template: 'other-symptoms',
        data: null
      },
      {
        template: 'geo-risks',
        data: {
          locationRiskFactors: LOCATION_RISK_FACTORS,
          allRiskFactors: this.api.getRiskFactors()
        }
      },
      {
        template: 'common-risks',
        data: {
          commonRiskFactors: COMMON_RISK_FACTORS,
          allRiskFactors: this.api.getRiskFactors()
        }
      },
      {
        template: 'question',
        data: {

        }
      },
      {
        template: 'summary',
        data: {

        }
      }
    ];

    // load first step
    this.currentStep = 0;
    this._loadStepTemplate();
  }

  _loadStepTemplate () {
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
