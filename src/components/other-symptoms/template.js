/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

let template = (context) => {
  return new Promise((resolve) => {
    resolve(`
        <h4 class="card-title">Please describe your other symptoms.</h4>
        <div class="card-text">
          <form>
            <div class="form-group">
              <label for="input-feel">How do you feel?</label>
              <textarea class="form-control" id="input-feel" rows="4"></textarea>
            </div>
          </form>
          <p>Identified observations:</p>
          <ul class="list-unstyled" id="observations">
          </ul>
        </div>
      `);
  });
};

export default template;
