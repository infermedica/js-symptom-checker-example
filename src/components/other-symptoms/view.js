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
  }

  updateObservations (observations) {
    let t = '';
    for (let o of observations) {
      t += `<li>${o.name}</li>`;
    }
    this.el.querySelector('#observations').innerHTML = t;
  }
}
