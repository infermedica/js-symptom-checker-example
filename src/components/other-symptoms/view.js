/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

export default class OtherSymptomsView extends View {
  constructor (el, context) {
    let binds = {
      '#input-feel': {
        type: 'input',
        listener: 'handleFeelChange'
      }
    };
    super(el, template, context, binds);
  }

  handleFeelChange (e) {
    console.log('OMG');
    //   this.api.parse(e.target.value).then((response) => {
    //     console.log(response);
    //   });
  }
}
