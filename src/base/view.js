/**
 * Created by Tomasz Gabrysiak @ Infermedica on 06/02/2017.
 */

export default class View {
  constructor(el, template, context, binds) {
    this.el = el;
    this.template = template;
    this.context = context;
    this.binds = binds;
  }

  render() {
    this.el.innerHTML = '<p><i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Loading...</p>';
    return this.template(this.context).then((html) => {
      this.el.innerHTML = html;
      return this.bindEvents();
    });
  }

  destroy() {
    this.unbindEvents();
    this.el.innerHTML = '';
  }

  bindEvents() {
    if (this.binds) {
      Object.keys(this.binds).forEach((key) => {
        this.el.querySelectorAll(key).forEach((item) => {
          item.addEventListener(this.binds[key].type, this.binds[key].listener);
        });
      });
    }
  }

  unbindEvents() {
    if (this.binds) {
      Object.keys(this.binds).forEach((key) => {
        this.el.querySelectorAll(key).forEach((item) => {
          item.removeEventListener(this.binds[key].type, this.binds[key].listener);
        });
      });
    }
  }
}
