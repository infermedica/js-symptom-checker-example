/**
 * Created by Tomasz Gabrysiak @ Infermedica on 06/02/2017.
 */

export default class View {
  constructor (el, template, context, binds) {
    this.el = el;
    this.template = template;
    this.context = context;
    this.binds = binds;
  }

  render () {
    this.el.innerHTML = '<p><i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Loading...</p>';
    return this.template(this.context).then((html) => {
      this.el.innerHTML = html;
      this._bindEvents();
    });
  }

  destroy () {
    this._unbindEvents();
    this.el.innerHTML = '';
  }

  _bindEvents () {
    for (let b in this.binds) {
      this.el.querySelectorAll(b).forEach((item) => {
        item.addEventListener(this.binds[b].type, this.binds[b].listener);
      });
    }
  }

  _unbindEvents () {
    for (let b in this.binds) {
      this.el.querySelectorAll(b).forEach((item) => {
        item.removeEventListener(this.binds[b].type, this.binds[b].listener);
      });
    }
  }
}

