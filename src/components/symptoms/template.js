/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

let template = (context) => {
  return new Promise((resolve) => {
    let checkbox = (label) => {
      return `
          <div class="form-group">
            <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
              <input type="checkbox" class="input-symptom custom-control-input">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">${label}</span>
            </label>
          </div>`;
    };
    let checkboxes = '';

    context.api.getSymptoms().then((symptoms) => {
      for (const s of symptoms) {
        if (context.symptoms.indexOf(s.id) >= 0) {
          checkboxes += checkbox(s.name);
        }
      }
      resolve(`
          <h4 class="card-title">Do you have any of the following symptoms?</h4>
          <p class="card-text">
            <form>
              ${checkboxes}
            </form>
          </p>
        `);
    });
  });
};

export default template;
