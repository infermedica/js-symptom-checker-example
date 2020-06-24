/**
 * Created by Tomasz Gabrysiak @ Infermedica on 06/02/2017.
 */

export default class Controller {
  constructor(el) {
    this.el = el;
  }

  render() {
    this.view.render();
  }

  setView(name, context) {
    this.beforeSetView(name);
    const ViewClass = this.viewMapper[name];
    this.view = new ViewClass(this.el, context);
    this.render();
  }

  destroyView() {
    this.view.destroy();
  }

  beforeSetView(name) {  // eslint-disable-line
    // intentionally left blank
  }
}
