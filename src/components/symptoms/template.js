/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html from '../../templates/helpers';

const template = (context) => {
  return new Promise((resolve) => {
    context.api.getSymptoms().then((symptoms) => {
      resolve(html`
          <h5 class="card-title">Please check all symptoms that seem to apply to you.</h5>
          <p class="text-muted small"><i class="fa fa-info-circle"></i> Unchecked ones will be considered as absent</p>
          <div class="card-text">
            <form>
              ${symptoms.map(symptom => {
                if (context.symptoms.indexOf(symptom.id) >= 0) {
                  return html`
                    <div class="form-group">
                      <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                        <input id="${symptom.id}" type="checkbox" class="input-symptom custom-control-input">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">${symptom.name}</span>
                      </label>
                    </div>
                  `;
                }
              })}
            </form>
          </div>
        `);
    });
  });
};

export default template;
