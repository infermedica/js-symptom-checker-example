/**
 * Created by Tomasz Gabrysiak @ Infermedica on 06/02/2017.
 */


import { controls } from './template';

export default class View {
  constructor(el, template) {
    this.el = document.getElementById('target');
  }
  render() {
    this.el.innerHTML = controls();
  }
}
