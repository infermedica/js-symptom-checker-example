/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

const template = (context) => {
  return new Promise((resolve) => {
    resolve(`
        <h5 class="card-title">Please select your sex and age.</h5>
        <div class="card-text">
          <form>
            <div class="form-group row">
              <label for="input-sex" class="col-sm-2 col-form-label">Sex</label>
              <div class="col-sm-10">
                <div class="form-check form-check-inline">
                  <label class="form-check-label">
                    <input class="input-sex form-check-input" checked type="radio" name="inlineRadioOptions" value="male"><i class="fa fa-fw fa-male"></i> male
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <label class="form-check-label">
                    <input class="input-sex form-check-input" type="radio" name="inlineRadioOptions" value="female"><i class="fa fa-fw fa-female"></i> female
                  </label>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="input-age" class="col-sm-2 col-form-label">Age</label>
              <div class="col-sm-2">
                <input type="number" class="form-control" id="input-age" value="30">
              </div>
            </div>
          </form>
        </div>
      `);
  });
};

export default template;
