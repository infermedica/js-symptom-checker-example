/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

// eslint-disable-next-line no-unused-vars
import s from './styles/styles.css';
import config from './config.js';
import InfermedicaApi from './infermedica-api';
import template from './templates/base';
import stepTemplates from './templates/steps';

import _ from 'lodash';

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

    let handleFeelChange = (e) => {
      this.api.parse(e.target.value).then((response) => {
        console.log(response);
      });
    };

    this.views = [
      {
        template: 'welcome',
        context: null,
        binds: null
      },
      {
        template: 'basic',
        context: {
        },
        binds: {
          '#input-sex': {
            type: 'change',
            listener: this.handleSexChange
          },
          '#input-age': {
            type: 'change',
            listener: this.handleAgeChange
          }
        }
      },
      {
        template: 'symptoms',
        context: {
          symptoms: COMMON_SYMPTOMS,
          api: this.api
        },
        binds: {
          '.input-symptom': {
            type: 'change',
            listener: this.handleSymptomsChange
          }
        }
      },
      {
        template: 'other-symptoms',
        context: null,
        binds: {
          '#input-feel': {
            type: 'input',
            listener: _.debounce(handleFeelChange, 400)
          }
        }
      },
      {
        template: 'geo-risks',
        context: {
          locationRiskFactors: LOCATION_RISK_FACTORS,
          api: this.api
        }
      },
      {
        template: 'common-risks',
        context: {
          commonRiskFactors: COMMON_RISK_FACTORS,
          api: this.api
        }
      },
      {
        template: 'question',
        context: {

        }
      },
      {
        template: 'summary',
        context: {

        }
      }
    ];
  }

  // view events' handlers
  handleSexChange (e) {
    console.log('sex changed');
    console.log(this);
    console.log(e.target.value);
  }

  handleAgeChange (e) {
    console.log('age changed');
    console.log(this);
    console.log(e.target.value);
  }

  handleSymptomsChange (e) {
    console.log('symptoms changed');
    console.log(this);
    console.log(e.target.value);
  }

  render () {
    super.render();
    this.nextButton = this.el.querySelector('#next-step');
    this.nextButton.addEventListener('click', e => this.nextStep(e));
  }

  startInterview () {
    this.controller = new Controller(this.el.querySelector('#step-container'));

    const currentView = this.views[this.currentStep];
    this.controller.setView(stepTemplates[currentView.template], currentView.context, currentView.binds);
  }

  nextStep () {
    this.currentStep += 1;
    this.currentStep = this.currentStep % 8;

    const currentView = this.views[this.currentStep];
    this.controller.destroyView();
    this.controller.setView(stepTemplates[currentView.template], currentView.context, currentView.binds);
  }
}

export default DemoApp;
