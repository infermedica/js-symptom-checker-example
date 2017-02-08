/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

let template = (context) => {
  return new Promise((resolve) => {
    resolve(`
        <h4 class="card-title">Welcome to the Symptom Checker Demo.</h4>
        <p class="card-text">Please click <span class="badge badge-primary">Next</span> to move to the first question.</p>
      `);
  });
};

export default template;
