/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html from '../../templates/helpers';
import _ from 'lodash';

const template = (context) => {
  return new Promise((resolve) => {
    context.api.getSuggestedSymptoms(context.data).then((suggestedSymptoms) => {
      if (!suggestedSymptoms.length) {
        resolve('<p><i class="fa fa-circle-o-notch fa-spin fa-fw"></i> I am thinking...</p>');
        document.getElementById('next-step').click();
      }
      resolve(html`
          <h5 class="card-title">Do you have any of the following symptoms?</h5>
          <div class="card-text">
            <form>
              ${_.take(suggestedSymptoms, 5).map(symptom => {
                return html`
                  <div class="custom-control custom-checkbox">
                    <input id="${symptom.id}" type="checkbox" class="input-symptom custom-control-input">
                    <label for="${symptom.id}" class="custom-control-label custom-checkbox mb-2 mr-sm-2 mb-sm-0">${symptom.name}</label>
                  </div>
                `;
              })}
            </form>
            <p class="text-muted small"><i class="fa fa-info-circle"></i> This is a list of symptoms suggested by our AI, based on the information gathered so far during the interview.</p>
          </div>
        `);
    });
  });
};

export default template;
