/**
 * Created by Tomasz Gabrysiak @ Infermedica on 14/02/2017.
 */

import Controller from './base/controller';

import WelcomeView from './components/welcome/view';
import BasicView from './components/basic/view';
import SymptomsView from './components/symptoms/view';
import OtherSymptomsView from './components/other-symptoms/view';
import GeoRisksView from './components/geo-risks/view';
import CommonRisksView from './components/common-risks/view';
import QuestionView from './components/question/view';
import SummaryView from './components/summary/view';

export default class DemoController extends Controller {
  constructor (el) {
    super(el);
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
}
