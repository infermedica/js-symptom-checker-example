/**
 * Created by Tomasz Gabrysiak @ Infermedica on 02/02/2017.
 */

import DemoApp from './app';

const app = new DemoApp(document.getElementById('app'));

window.addEventListener('load', () => {
  app.render();
  app.startInterview();
});
