/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

let template = (context) => {
  return new Promise((resolve) => {
    let conditions = '';

    context.api.diagnosis(context.patient.toDiagnosis()).then((data) => {
      for (const c of data.conditions) {
        conditions += `<li>${c.name} <span class="text-muted">${Math.round(c.probability * 100 * 100) / 100}%</span></li>`;
      }

      resolve(`
        <h4 class="card-title">Summary</h4>
        <div class="card-text">
          <p>Basing on the interview, you could suffer from:</p>
          <ul>
            ${conditions}
          </ul>
          <p class="text-muted">This list may not be complete. Only a licensed medical provider can diagnose and treat illnesses.</p>
        </div>
      `);
    });
  });
};

export default template;
