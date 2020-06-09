/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import _ from 'lodash';
import html from '../../templates/helpers';

const symptomHtmlMapper = (suggestedSymptoms) => {
  return _.take(suggestedSymptoms, 5).map((symptom) => {
    return html`
      <div class="custom-control custom-checkbox">
        <input id="${symptom.id}" type="checkbox" class="input-symptom custom-control-input">
        <label for="${symptom.id}" class="custom-control-label custom-checkbox mb-2 mr-sm-2 mb-sm-0">
          ${symptom.name}
        </label>
      </div>
    `;
  });
};

const template = (context) => {
  return context.api.getSuggestedSymptoms(context.data).then((suggestedSymptoms) => {
    if (!suggestedSymptoms.length) {
      document.getElementById('next-step').click();
      return '<p><i class="fa fa-circle-o-notch fa-spin fa-fw"></i> I am thinking...</p>';
    }
    return html`
      <h5 class="card-title">Do you have any of the following symptoms?</h5>
      <div class="card-text">
        <form>
          ${symptomHtmlMapper(suggestedSymptoms)}
        </form>
        <p class="text-muted small">
          <i class="fa fa-info-circle"></i>
          This is a list of symptoms suggested by our AI,
          based on the information gathered so far during the interview.
        </p>
      </div>
    `;
  });
};

export default template;
