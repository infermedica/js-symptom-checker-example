/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

require('../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../node_modules/font-awesome/css/font-awesome.min.css');

require('./styles/styles.css');

import settings from './settings';

import template from './templates/base';

import App from './base/app';
import DemoController from './controller';
import InfermedicaApi from './infermedica-api';
import Patient from './patient';

export default class DemoApp extends App {
  constructor (el) {
    super(el, template);

    this.api = new InfermedicaApi(settings['app-id'], settings['app-key']);

    this.patient = new Patient();

    this.currentStep = 0;

    this.views = [
      {
        context: {
          api: this.api
        },
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
        view: 'nlp'
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
        view: 'suggest'
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

  _afterRender () {
    this.nextButton = this.el.querySelector('#next-step');
    this.nextButton.addEventListener('click', e => this.nextStep(e));
  }

  startInterview () {
    this.controller = new DemoController(this.el.querySelector('#step-container'));

    const currentView = this.views[this.currentStep];
    this.controller.setView(currentView.view, currentView.context);
  }

  nextStep () {
    this.currentStep += 1;
    this.currentStep %= 8;

    const currentView = this.views[this.currentStep];

    this.controller.destroyView();
    this.controller.setView(currentView.view, currentView.context);
  }
}
