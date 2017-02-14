/**
 * Created by Tomasz Gabrysiak @ Infermedica on 02/02/2017.
 */

import DemoApp from './app';

const app = new DemoApp(document.getElementById('app'));

window.addEventListener('load', () => {
  app.render();
  app.startInterview();
});

document.getElementById('input-app-id').addEventListener('change', e => {
  app.api.setAppId(e.target.value);
});

document.getElementById('input-app-key').addEventListener('change', e => {
  app.api.setAppKey(e.target.value);
});
