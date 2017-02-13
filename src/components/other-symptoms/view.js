/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import _ from 'lodash';

import View from '../../base/view';
import template from './template';

export default class OtherSymptomsView extends View {
  constructor (el, context) {
    const handleFeelChange = (e) => {
      this.context.api.parse(e.target.value).then((response) => {
        this.updateObservations(response.mentions);
      });
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

  updateObservations (observations) {
    this.observations = observations;
    console.log(this.observations);
    let t = '';
    for (let o of observations) {
      t += `<li>${o.name} - ${o.choice_id}</li>`;
    }
    this.el.querySelector('#observations').innerHTML = t;
  }

  saveObservations () {
    if (_.isEmpty(this.observations)) {
      return;
    }
    const pairs = this.observations.map((item) => {
      let val = item.choice_id === 'present';
      return [item.id, val];
    });
    const o = _.fromPairs(pairs);
    this.context.patient.addSymptomsGroup(o);
  }

  destroy () {
    this.saveObservations();
    super.destroy();
  }
}
