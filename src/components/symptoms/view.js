/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

export default class SymptomsView extends View {
  constructor (el, context) {
    context.symptoms = ['s_21', 's_1190', 's_98', 's_119', 's_88', 's_13', 's_156', 's_285', 's_241'];

    const handleSymptomsChange = (e) => {
      let group = {};
      this.el.querySelectorAll('.input-symptom').forEach((item) => {
        group[item.id] = item.checked;
      });
      this.context.patient.addSymptomsGroup(group);
    };

    const binds = {
      '.input-symptom': {
        type: 'change',
        listener: handleSymptomsChange
      }
    };

    super(el, template, context, binds);
  }
}
