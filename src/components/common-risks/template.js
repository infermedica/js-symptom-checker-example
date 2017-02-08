/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

let template = (context) => {
  return new Promise((resolve) => {
    let checkbox = (label) => {
      return `
          <div class="form-group">
            <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
              <input type="checkbox" class="custom-control-input">
              <span class="custom-control-indicator"></span>
              <span class="custom-control-description">${label}</span>
            </label>
          </div>`;
    };
    let checkboxes = '';

    context.api.getRiskFactors().then((risks) => {
      for (const r of risks) {
        if (context.commonRiskFactors.indexOf(r.id) >= 0) {
          checkboxes += checkbox(r.name);
        }
      }
      resolve(`
          <h4 class="card-title">Please check all that apply to you.</h4>
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
