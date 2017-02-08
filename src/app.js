/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

// eslint-disable-next-line no-unused-vars
import s from './styles/styles.css';
import config from './config.js';
import template from './templates/base';

import InfermedicaApi from './infermedica-api';
import App from './base/app';
import Controller from './base/controller';

class DemoApp extends App {
  constructor (el) {
    super(el, template);

    const COMMON_SYMPTOMS = ['s_21', 's_1190', 's_98', 's_119', 's_88', 's_13', 's_156', 's_285', 's_241'];
    const LOCATION_RISK_FACTORS = ['p_15', 'p_20', 'p_21', 'p_16', 'p_17', 'p_18', 'p_14', 'p_19', 'p_22', 'p_13'];
    const COMMON_RISK_FACTORS = ['p_8', 'p_9', 'p_10', 'p_28'];

    this.api = new InfermedicaApi(
      config.API_URL,
      config.API_MODEL,
      config.API_APP,
      config.API_KEY
    );

    this.currentStep = 0;

    this.views = [
      {
        context: null,
        view: 'welcome'
      },
      {
        context: null,
        view: 'basic'
      },
      {
        context: {
          symptoms: COMMON_SYMPTOMS,
          api: this.api
        },
        view: 'symptoms'
      },
      {
        context: {
          api: this.api
        },
        view: 'other-symptoms'
      },
      {
        context: {
          locationRiskFactors: LOCATION_RISK_FACTORS,
          api: this.api
        },
        view: 'geo-risks'
      },
      {
        context: {
          commonRiskFactors: COMMON_RISK_FACTORS,
          api: this.api
        },
        view: 'common-risks'
      },
      {
        context: null,
        view: 'question'
      },
      {
        context: null,
        view: 'summary'
      }
    ];
  }

  render () {
    super.render();
    this.nextButton = this.el.querySelector('#next-step');
    this.nextButton.addEventListener('click', e => this.nextStep(e));
  }

  startInterview () {
    this.controller = new Controller(this.el.querySelector('#step-container'));

    const currentView = this.views[this.currentStep];
    this.controller.setView(currentView.view, currentView.context);
  }

  nextStep () {
    this.currentStep += 1;
    this.currentStep = this.currentStep % 8;

    const currentView = this.views[this.currentStep];
    this.controller.destroyView();
    this.controller.setView(currentView.view, currentView.context);
  }
}

export default DemoApp;
