/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

export default class BasicView extends View {
  constructor (el, context) {
    const handleSexChange = (e) => {
      this.context.patient.setSex(e.target.value);
    };

    const handleAgeChange = (e) => {
      this.context.patient.setAge(e.target.value);
    };

    const binds = {
      '.input-sex': {
        type: 'change',
        listener: handleSexChange
      },
      '#input-age': {
        type: 'change',
        listener: handleAgeChange
      }
    };

    super(el, template, context, binds);
    this.context.patient.reset();
  }
}
