/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

let template = (context) => {
  return new Promise((resolve) => {
    let conditions = '';

    context.api.diagnosis(context.patient.toDiagnosis()).then((data) => {
      for (const c of data.conditions) {
        let button = c.probability >= 0.2 ? `<button data-id="${c.id}" class="explain btn btn-inline btn-sm btn-link"><i class="fa fa-fw fa-eye"></i> explain</button>` : '';

        conditions += `
          <div style="margin-bottom: 10px;" class="row">
            <div class="col-8">
              ${c.name} ${button}
            </div>
            <div class="col-4">
              <div class="progress">
                <div class="progress-bar bg-info" role="progressbar" style="padding-top: 6px; height: 27px; width: ${Math.round(c.probability * 100 * 100) / 100}%">${Math.round(c.probability * 100 * 100) / 100}%</div>
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
          <div class="alert alert-warning" role="alert">
            <i class="fa fa-info-circle"></i> This list may not be complete. Only a licensed medical provider can diagnose and treat illnesses.
          </div>
        </div>
      `);
    });
  });
};

export default template;
