/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

let template = (context) => {
  return new Promise((resolve) => {
    let conditions = '';

    context.api.diagnosis(context.patient.toDiagnosis()).then((data) => {
      for (const c of data.conditions) {
        // conditions += `<li data-id="${c.id}" class="explain">${c.name} <span class="text-muted">${Math.round(c.probability * 100 * 100) / 100}%</span></li>`;
        let button = c.probability >= 0.2 ? `<button data-id="${c.id}" class="explain btn btn-info btn-sm btn-block">explain</button>` : '';
        conditions += `
          <div style="margin-bottom: 10px;" class="row">
            <div class="col-6">
              ${c.name} <span class="float-right text-muted">${Math.round(c.probability * 100 * 100) / 100}%</span>
            </div>
            <div class="col-2">
              ${button}
            </div>
            <div class="col-4">
              <div class="progress">
                <div class="progress-bar bg-info" role="progressbar" style="height: 27px; width: ${Math.round(c.probability * 100 * 100) / 100}%"></div>
              </div>
            </div>
            <div class="explanation col-12"></div>
          </div>
        `;
      }

      resolve(`
        <h5 class="card-title">Summary</h5>
        <div class="card-text">
          <p>Basing on the interview, you could suffer from:</p>
          ${conditions}
          <p class="text-muted">This list may not be complete. Only a licensed medical provider can diagnose and treat illnesses.</p>
        </div>
      `);
    });
  });
};

export default template;
