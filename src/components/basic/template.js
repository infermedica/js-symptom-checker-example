/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

let template = (context) => {
  return new Promise((resolve) => {
    resolve(`
        <h5 class="card-title">Please select your sex and age.</h5>
        <div class="card-text">
        <form>
          <div class="form-group row">
            <label for="input-sex" class="col-sm-2 col-form-label">Sex</label>
            <div class="col-sm-10">
              <select class="custom-select form-control mb-2 mr-sm-2 mb-sm-0" id="input-sex">
                <option selected value="male">Male</option>
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
        </div>
      `);
  });
};

export default template;
