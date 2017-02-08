/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

export default class BasicView extends View {
  constructor (el, context) {
    let handleSexChange = (e) => {
      console.log('sex changed');
      console.log(this);
      console.log(e.target.value);
    };

    let handleAgeChange = (e) => {
      console.log('age changed');
      console.log(this);
      console.log(e.target.value);
    };

    const binds = {
      '#input-sex': {
        type: 'change',
        listener: handleSexChange
      },
      '#input-age': {
        type: 'change',
        listener: handleAgeChange
      }
    };

    super(el, template, context, binds);
  }
}
