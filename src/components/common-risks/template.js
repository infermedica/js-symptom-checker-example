/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html, {riskHtmlMapper} from '../../templates/helpers';

const template = (context) => {
  return context.api.getRiskFactors(context.patient.age).then((risks) => {
    return html`
        <h5 class="card-title">Please check all that apply to you.</h5>
        <div class="card-text">
          <form>
            ${riskHtmlMapper(risks, context.commonRiskFactors)}
          </form>
          <p class="text-muted small">
            <i class="fa fa-info-circle"></i> Above you see the most common risk factors. 
            Although /diagnosis may return questions about risk factors, 
            when implementing a symptom checker we recommend asking the patient about common risk factors 
            before the actual interview begins. This helps to steer the interview in the right direction 
            and to reduce its length. Please read more about risk factors 
            <a target="_blank" href="https://developer.infermedica.com/docs/diagnosis#common-risk-factors">here</a>.
          </p>
        </div>
      `;
  });
};

export default template;
