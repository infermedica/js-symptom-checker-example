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
                    <div class="form-group">
                      <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
                        <input id="${risk.id}" type="checkbox" class="input-risk custom-control-input">
                        <span class="custom-control-indicator"></span>
                        <span class="custom-control-description">${risk.name}</span>
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
