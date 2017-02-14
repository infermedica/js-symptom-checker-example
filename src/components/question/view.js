/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

import _ from 'lodash';

export default class QuestionView extends View {
  constructor (el, context) {
    const handleNextQuestion = (e) => {
      let group = {};
      if (this.context.question.type !== 'single') {
        this.el.querySelectorAll('.custom-control-input').forEach((item) => {
          group[item.id] = item.checked;
        });
        this.context.patient.addSymptomsGroup(group);
        this.destroy();
        this.render();
      } else {
        // type = single
        const val = {
          'false': false,
          'true': true,
          'unknown:': undefined
        };
        this.context.patient.addSymptomsGroup({[this.context.question.items[0].id]: val[e.target.dataset.value]});
        this.destroy();
        this.render();
      }
    };

    const binds = {
      '.next-question': {
        type: 'click',
        listener: handleNextQuestion
      }
    };

    super(el, template, context, binds);
    this.stopCondition = 0.8;
  }

  render () {
    this.el.innerHTML = '<p><i class="fa fa-circle-o-notch fa-spin fa-fw"></i> I am thinking...</p>';
    this.context.api.diagnosis(this.context.patient.toDiagnosis()).then((data) => {
      this.context.question = data.question;
      let bestProb = _.get(data, 'conditions[0].probability');
      if (bestProb > this.stopCondition) {
        this.destroy();
        document.getElementById('next-step').removeAttribute('disabled');
        document.getElementById('next-step').click();
      } else {
        super.render();
      }
    });
  }
}
