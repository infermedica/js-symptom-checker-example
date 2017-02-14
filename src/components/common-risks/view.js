/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

export default class CommonRisksView extends View {
  constructor (el, context) {
    context.commonRiskFactors = ['p_8', 'p_9', 'p_10', 'p_28', 'p_47'];

    const handleRisksChange = (e) => {
      let group = {};
      this.el.querySelectorAll('.input-risk').forEach((item) => {
        group[item.id] = item.checked;
      });
      this.context.patient.addSymptomsGroup(group);
    };

    const binds = {
      '.input-risk': {
        type: 'change',
        listener: handleRisksChange
      }
    };

    super(el, template, context, binds);
  }
}
