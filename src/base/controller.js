/**
 * Created by Tomasz Gabrysiak @ Infermedica on 06/02/2017.
 */

import WelcomeView from '../components/welcome/view';
import BasicView from '../components/basic/view';
import SymptomsView from '../components/symptoms/view';
import OtherSymptomsView from '../components/other-symptoms/view';
import GeoRisksView from '../components/geo-risks/view';
import CommonRisksView from '../components/common-risks/view';
import QuestionView from '../components/question/view';
import SummaryView from '../components/summary/view';

export default class Controller {
  constructor (el) {
    this.el = el;

    this.viewMapper = {
      'welcome': WelcomeView,
      'basic': BasicView,
      'symptoms': SymptomsView,
      'other-symptoms': OtherSymptomsView,
      'geo-risks': GeoRisksView,
      'common-risks': CommonRisksView,
      'question': QuestionView,
      'summary': SummaryView
    };
  }

  render () {
    this.view.render();
  }

  setView (name, context) {
    let ViewClass = this.viewMapper[name];
    this.view = new ViewClass(this.el, context);
    this.render();
  }

  destroyView () {
    this.view.destroy();
  }
}

