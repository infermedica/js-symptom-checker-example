/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html from '../../templates/helpers';

const template = (context) => {
  return new Promise((resolve) => {
    context.api.getRiskFactors().then((risks) => {
      resolve(html`
          <h5 class="card-title">Please check all that apply to you.</h5>
          <div class="card-text">
            <form>
              ${risks.map(risk => {
                if (context.commonRiskFactors.indexOf(risk.id) >= 0) {
                  return html`
                    <div class="custom-control custom-checkbox">
                      <input id="${risk.id}" type="checkbox" class="input-risk custom-control-input">
                      <label for="${risk.id}" class="custom-control-label custom-checkbox mb-2 mr-sm-2 mb-sm-0">${risk.name}</label>
                    </div>
                  `;
                }
              })}
            </form>
            <p class="text-muted small"><i class="fa fa-info-circle"></i> Above you see the most common risk factors. Although /diagnosis may return questions about risk factors, when implementing a symptom checker we recommend asking the patient about common risk factors before the actual interview begins. This helps to steer the interview in the right direction and to reduce its length. Please read more about risk factors <a target="_blank" href="https://developer.infermedica.com/docs/diagnosis#common-risk-factors">here</a>.</p>
          </div>
        `);
    });
  });
};

export default template;
