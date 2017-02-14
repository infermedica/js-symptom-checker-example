/**
 * Created by Tomasz Gabrysiak @ Infermedica on 06/02/2017.
 */

import QuestionView from '../components/question/view';

export default class Controller {
  constructor (el) {
    this.el = el;
  }

  render () {
    this.view.render();
  }

  setView (name, context) {
    let ViewClass = this.viewMapper[name];
    // TODO: move to the subclass
    if (ViewClass === QuestionView) {
      document.getElementById('next-step').setAttribute('disabled', 'true');
    }
    this.view = new ViewClass(this.el, context);
    this.render();
  }

  destroyView () {
    this.view.destroy();
  }
}

