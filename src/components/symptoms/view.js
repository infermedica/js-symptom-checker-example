/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

export default class SymptomsView extends View {
  constructor (el, context) {
    let handleSymptomsChange = (e) => {
      console.log('symptoms changed');
      console.log(this);
      console.log(e.target.value);
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
