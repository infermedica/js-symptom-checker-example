/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import View from '../../base/view';
import template from './template';

export default class SummaryView extends View {
  constructor (el, context) {
    const getExplanationMarkup = (data) => {
      let supporting = '';
      let conflicting = '';

      for (let e of data.supporting_evidence) {
        supporting += `<li>${e.name}</li>`;
      }

      for (let e of data.conflicting_evidence) {
        conflicting += `<li>${e.name}</li>`;
      }

      let base = `
        <div class="row">
          <div class="col-6">
            <span class="badge badge-success">Evidences for</span>
            <ul class="list-unstyled">
              ${supporting}
            </ul>
          </div>
          <div class="col-6">
            <span class="badge badge-danger">Evidences against</span>
            <ul class="list-unstyled">
              ${conflicting}
            </ul>
          </div>
        </div>
       `;
      return base;
    };
    const handleExplainRequested = (e) => {
      let id = e.target.dataset.id;
      let el = e.target.parentNode.parentNode.querySelector('.explanation');

      if (!el.innerHTML) {
        el.innerHTML = 'One second...';
        context.api.explain(Object.assign(context.patient.toDiagnosis(), {target: id})).then((data) => {
          console.log(data);
          el.innerHTML = getExplanationMarkup(data);
        });
      } else {
        el.innerHTML = '';
      }
    };

    const binds = {
      '.explain': {
        type: 'click',
        listener: handleExplainRequested
      }
    };

    super(el, template, context, binds);
  }
}
