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

import Patient from './patient';

// TODO: subclass controller

class DemoApp extends App {
  constructor (el) {
    super(el, template);

    this.api = new InfermedicaApi(
      config.API_URL,
      config.API_MODEL,
      config.API_APP,
      config.API_KEY
    );

    this.patient = new Patient();

    this.currentStep = 0;

    this.views = [
      {
        context: null,
        view: 'welcome'
      },
      {
        context: {
          patient: this.patient
        },
        view: 'basic'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'symptoms'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'other-symptoms'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'geo-risks'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'common-risks'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
        view: 'question'
      },
      {
        context: {
          api: this.api,
          patient: this.patient
        },
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
