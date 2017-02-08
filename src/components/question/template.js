/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

let template = (context) => {
  return new Promise((resolve) => {
    resolve(`
        <h4 class="card-title">Question</h4>
        <p class="card-text">
          ANSWER PANEL
        </p>
      `);
  });
};

export default template;
