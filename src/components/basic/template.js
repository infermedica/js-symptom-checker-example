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
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sex-radio-inline-1" name="sex-radio-inline" class="input-sex custom-control-input" value="male" checked>
                  <label class="custom-control-label" for="sex-radio-inline-1"><i class="fa fa-fw fa-male"></i> male</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="sex-radio-inline-2" name="sex-radio-inline" class="input-sex custom-control-input" value="female">
                  <label class="custom-control-label" for="sex-radio-inline-2"><i class="fa fa-fw fa-female"></i> female</label>
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
          <p class="text-muted small"><i class="fa fa-info-circle"></i> The sex and age attributes are two required elements of every request to /diagnosis. Typically this is the first question you should ask in your symptom checker. Read more <a target="_blank" href="https://developer.infermedica.com/docs/diagnosis#sex-and-age">here</a>.</p>
        </div>
      `);
  });
};

export default template;
