/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

let stepTemplates = {
  'welcome': () => {
    return `
      <h4 class="card-title">Welcome to the Symptom Checker Demo.</h4>
      <p class="card-text">Please click <span class="badge badge-primary">Next</span> to move to the first question.</p>
    `;
  },
  'basic': () => {
    return `
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
    `;
  },
  'symptoms': () => {
    return `
      <h4 class="card-title">Do you have any of the following symptoms?</h4>
      <p class="card-text">
      <form>
        <div class="form-group">
          <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
            <input type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Abdominal pain</span>
          </label>
        </div>
        <div class="form-group">
          <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
            <input type="checkbox" class="custom-control-input">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">Back pain</span>
          </label>
        </div>
      </form>
      </p>
    `;
  }
};

export default stepTemplates;
