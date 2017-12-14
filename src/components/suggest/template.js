/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html from '../../templates/helpers';

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
              ${suggestedSymptoms.map(symptom => {
                return html`
                  <div class="form-group">
                    <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                      <input id="${symptom.id}" type="checkbox" class="input-symptom custom-control-input">
                      <span class="custom-control-indicator"></span>
                      <span class="custom-control-description">${symptom.name}</span>
                    </label>
                  </div>
                `;
              })}
            </form>
            <p class="text-muted small"><i class="fa fa-info-circle"></i> This is a list of symptoms suggested by our AI, basing on the information gathered so far during the interview.</p>
          </div>
        `);
    });
  });
};

export default template;
