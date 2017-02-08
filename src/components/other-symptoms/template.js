/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

let template = () => {
  return new Promise((resolve) => {
    let observations = `<li>sth here</li>`;

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
          <ul>
            ${observations}
          </ul>
        </div>
      `);
  });
};

export default template;
