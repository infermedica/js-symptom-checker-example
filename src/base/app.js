/**
 * Created by Tomasz Gabrysiak @ Infermedica on 06/02/2017.
 */

export default class App {
  constructor(el, template) {
    this.el = el;
    this.template = template;
  }

  render() {
    this.el.innerHTML = this.template;
    this.afterRender();
  }

  afterRender() {  // eslint-disable-line
    // intentionally left blank
  }
}
