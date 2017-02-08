/**
 * Created by Tomasz Gabrysiak @ Infermedica on 06/02/2017.
 */

import OtherSymptomsView from '../components/other-symptoms/view';

export default class Controller {
  constructor (el) {
    this.el = el;

    this.viewMapper = {
      'other-symptoms': OtherSymptomsView
    };
  }

  render () {
    this.view.render();
  }

  setView (name, context) {
    let ViewClass = this.viewMapper[name];
    this.view = new ViewClass(this.el, context);
    this.render();
  }

  destroyView () {
    this.view.destroy();
  }
}

