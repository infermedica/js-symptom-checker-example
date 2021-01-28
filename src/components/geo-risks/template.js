/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html, {riskHtmlMapper} from '../../templates/helpers';

const template = (context) => {
  return context.api.getRiskFactors(context.patient.age).then((risks) => {
    return html`
      <h5 class="card-title">Please select where you live or have recently traveled to.</h5>
      <div class="card-text">
        <form>
          ${riskHtmlMapper(risks, context.locationRiskFactors)}
        </form>
        <p class="text-muted small">
          <i class="fa fa-info-circle"></i> Above you see risk factors related to geographical location.
        </p>
      </div>
    `;
  });
};

export default template;
