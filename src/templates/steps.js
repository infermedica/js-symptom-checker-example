/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

let stepTemplates = {
  'welcome': () => {
    return new Promise((resolve) => {
      resolve(`
        <h4 class="card-title">Welcome to the Symptom Checker Demo.</h4>
        <p class="card-text">Please click <span class="badge badge-primary">Next</span> to move to the first question.</p>
      `);
    });
  },
  'basic': (context) => {
    return new Promise((resolve) => {
      resolve(`
        <h4 class="card-title">Please select your sex and age.</h4>
        <p class="card-text">
        <form>
          <div class="form-group row">
            <label for="input-sex" class="col-sm-2 col-form-label">Sex</label>
            <div class="col-sm-10">
              <select class="custom-select form-control mb-2 mr-sm-2 mb-sm-0" id="input-sex">
                <option selected>Choose...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label for="input-age" class="col-sm-2 col-form-label">Age</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="input-age" value="30">
            </div>
          </div>
        </form>
        </p>
      `);
    });
  },
  'symptoms': (context) => {
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
  },
  'other-symptoms': () => {
    return new Promise((resolve) => {
      resolve(`
        <h4 class="card-title">Please describe your other symptoms.</h4>
        <p class="card-text">
          <form>
            <div class="form-group">
              <label for="input-feel">How do you feel?</label>
              <textarea class="form-control" id="input-feel" rows="4"></textarea>
            </div>
          </form>
        </p>
      `);
    });
  },
  'geo-risks': (context) => {
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

      context.api.getRiskFactors().then((symptoms) => {
        for (const s of symptoms) {
          if (context.locationRiskFactors.indexOf(s.id) >= 0) {
            checkboxes += checkbox(s.name);
          }
        }
        resolve(`
          <h4 class="card-title">Please select where you live or have recently traveled to.</h4>
          <p class="card-text">
            <form>
              ${checkboxes}
            </form>
          </p>
        `);
      });
    });
  },
  'common-risks': (context) => {
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
  },
  'question': () => {
    return new Promise((resolve) => {
      resolve(`
        <h4 class="card-title">Question</h4>
        <p class="card-text">
          ANSWER PANEL
        </p>
      `);
    });
  },
  'summary': () => {
    return new Promise((resolve) => {
      resolve(`
        <h4 class="card-title">Summary</h4>
        <p class="card-text">
        
        </p>
      `);
    });
  }
};

export default stepTemplates;
