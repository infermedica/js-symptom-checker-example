/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

export default class GeoRisksView extends View {
  constructor (el, context) {
    // below are ids of risk factors related with geographical location
    context.locationRiskFactors = ['p_15', 'p_20', 'p_21', 'p_16', 'p_17', 'p_18', 'p_14', 'p_19', 'p_22', 'p_13'];

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
