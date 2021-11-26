/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

function addPostmenopause(riskFactors) {
  riskFactors.push('p_11');
}

function addPregnancy(riskFactors) {
  riskFactors.push('p_42');
}

function addDiabetes(riskFactors) {
  riskFactors.push('p_8');
}

export default class CommonRisksView extends View {
  constructor(el, context) {
    const {age} = context.patient;
    // ids of common risk factors like hypertension or high cholesterol
    context.commonRiskFactors = ['p_7', 'p_28', 'p_10', 'p_9', 'p_264'];

    if (context.patient.sex === 'female') {
      if (age.value > 45) {
        addPostmenopause(context.commonRiskFactors);
      } else if (age >= 15) {
        addPregnancy(context.commonRiskFactors);
      }
    }

    if (age.value > 49) {
      addDiabetes(context.commonRiskFactors);
    }

    const handleRisksChange = (e) => {
      const group = {};
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
