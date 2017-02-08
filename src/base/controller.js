/**
 * Created by Tomasz Gabrysiak @ Infermedica on 06/02/2017.
 */

import View from './view';

export default class Controller {
  constructor (el) {
    this.el = el;
  }

  render () {
    this.view.render();
  }

  setView (template, context, binds) {
    this.view = new View(this.el, template, context, binds);
    this.render();
  }

  destroyView () {
    this.view.destroy();
  }
}

