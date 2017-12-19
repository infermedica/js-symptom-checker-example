/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html from '../../templates/helpers';

const template = (context) => {
  return new Promise((resolve) => {
    context.api.diagnosis(context.patient.toDiagnosis()).then((data) => {
      resolve(html`
        <h5 class="card-title">Summary</h5>
        <div class="card-text">
          <p>Based on the interview, you could suffer from:</p>
          ${data.conditions.map(condition => `
            <div class="summary-item row">
              <div class="col-8">
                ${condition.name}
                ${condition.probability >= 0.2
                  ? `<i class="fa fa-fw fa-eye"></i><a href data-id="${condition.id}" class="explain">explain</a>` : ``}
              </div>
              <div class="col-4">
                <div class="progress">
                  <div class="progress-bar bg-info" role="progressbar" style="width: ${Math.floor(condition.probability * 100)}%">${Math.floor(condition.probability * 100)}%</div>
                </div>
              </div>
              <div class="explanation col-12"></div>
            </div>          
          `)}
          <div class="alert alert-warning" role="alert">
            <i class="fa fa-info-circle"></i> Please note that the list below may not be complete and is provided solely for informational purposes and is not a qualified medical opinion.
          </div>
        </div>
      `);
    });
  });
};

export default template;
