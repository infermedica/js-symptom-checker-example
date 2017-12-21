/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

export default class CommonRisksView extends View {
  constructor (el, context) {
    // ids of common risk factors like hypertension or diabetes
    context.commonRiskFactors = ['p_7', 'p_28', 'p_10', 'p_9', 'p_147', 'p_8'];

    // p_11 is postmenopause - we show this factor only for women after 39 yo
    if (context.patient.sex === 'female' && context.patient.age > 39) {
      context.commonRiskFactors.push('p_11');
    }

    const handleRisksChange = (e) => {
      let group = {};
      this.el.querySelectorAll('.input-risk').forEach((item) => {
        group[item.id] = {reported: item.checked};
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
