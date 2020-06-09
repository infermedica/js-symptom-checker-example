/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import _ from 'lodash';

import View from '../../base/view';
import template from './template';

export default class NLPView extends View {
  constructor(el, context) {
    const handleFeelChange = (e) => {
      const feel = e.target.value;
      if (feel) {
        this.context.api.parse(feel).then((response) => {
          return this.updateObservations(response.mentions);
        });
      }
    };

    const binds = {
      '#input-feel': {
        type: 'input',
        listener: _.debounce(handleFeelChange, 400)
      }
    };

    super(el, template, context, binds);
    this.observations = {};
  }

  updateObservations(observations) {
    this.observations = observations;
    let t = '';
    for (const o of observations) {
      t += `
        <li>
          <i class="text-${o.choice_id === 'present' ? 'success' : 'danger'} 
            fa fa-fw fa-${o.choice_id === 'present' ? 'plus' : 'minus'}-circle"></i>
          ${o.name}
        </li>
      `;
    }
    this.el.querySelector('#observations').innerHTML = t;
    this.checkObservations();
  }

  checkObservations() {
    const present = (element) => element.choice_id === 'present';
    if (this.observations.some(present)) {
      document.getElementById('next-step').removeAttribute('disabled');
    } else {
      document.getElementById('next-step').setAttribute('disabled', 'true');
    }
  }

  saveObservations() {
    if (_.isEmpty(this.observations)) {
      return;
    }
    const pairs = this.observations.map((item) => {
      const val = {
        reported: item.choice_id === 'present'
      };

      if (val.reported) {
        Object.assign(val, {
          initial: true
        });
      }
      return [item.id, val];
    });
    const o = _.fromPairs(pairs);
    this.context.patient.addSymptomsGroup(o);
  }

  destroy() {
    this.saveObservations();
    super.destroy();
  }
}
