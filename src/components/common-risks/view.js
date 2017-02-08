/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

export default class CommonRisksView extends View {
  constructor (el, context) {
    let handleRisksChange = (e) => {
      console.log('risks changed');
      console.log(this);
      console.log(e.target.value);
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
