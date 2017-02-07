/**
 * Created by Tomasz Gabrysiak @ Infermedica on 02/02/2017.
 */

import DemoApp from './app';

// eslint-disable-next-line no-unused-vars
const app = new DemoApp(document.getElementById('app'));

window.addEventListener('load', () => app.render());
