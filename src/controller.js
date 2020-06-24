/**
 * Created by Tomasz Gabrysiak @ Infermedica on 14/02/2017.
 */

import Controller from './base/controller';

import WelcomeView from './components/welcome/view';
import BasicView from './components/basic/view';
import SuggestView from './components/suggest/view';
import NLPView from './components/nlp/view';
import GeoRisksView from './components/geo-risks/view';
import CommonRisksView from './components/common-risks/view';
import QuestionView from './components/question/view';
import SummaryView from './components/summary/view';

export default class DemoController extends Controller {
  constructor(el) {
    super(el);
    this.viewMapper = {
      welcome: WelcomeView,
      basic: BasicView,
      suggest: SuggestView,
      nlp: NLPView,
      'geo-risks': GeoRisksView,
      'common-risks': CommonRisksView,
      question: QuestionView,
      summary: SummaryView
    };
  }

  beforeSetView(name) {
    const ViewClass = this.viewMapper[name];
    if ([QuestionView, NLPView].includes(ViewClass)) {
      document.getElementById('next-step').setAttribute('disabled', 'true');
    }
  }
}
