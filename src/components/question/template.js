/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

let getRadio = (id, label) => {
  return `
    <div class="form-check">
      <label class="custom-control custom-radio form-check-label">
        <input id="${id}" type="radio" class="custom-control-input" name="radio">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">
        ${label}
      </label>
    </div>
  `;
};

let getCheckbox = (id, label) => {
  return `
    <div class="form-group">
      <label class="custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0">
        <input id="${id}" type="checkbox" class="custom-control-input">
        <span class="custom-control-indicator"></span>
        <span class="custom-control-description">${label}</span>
      </label>
    </div>
  `;
};

let answersGroupSingle = (items) => {
  let radios = '';
  for (let i of items) {
    radios += getRadio(i.id, i.name);
  }
  return `
    <form>
      <fieldset class="form-group">
        ${radios}
      </fieldset>
    </form>
  `;
};

let answersGroupMultiple = (items) => {
  let checkboxes = '';
  for (let i of items) {
    checkboxes += getCheckbox(i.id, i.name);
  }
  return `
    <form>
      <fieldset class="form-group">
        ${checkboxes}
      </fieldset>
    </form>
  `;
};

let answersSingle = (items) => {
  return `
    <div class="btn-group" role="group">
      <button type="button" data-value="true" class="next-question btn btn-success">Yes</button>
      <button type="button" data-value="false" class="next-question btn btn-danger">No</button>
      <button type="button" data-value="unknown" class="next-question btn btn-info">Skip question</button>
    </div>
  `;
};

let template = (context) => {
  return new Promise((resolve) => {
    const mapper = {
      'group_single': answersGroupSingle,
      'group_multiple': answersGroupMultiple,
      'single': answersSingle
    };

    let nextButton = '';

    if (context.question.type !== 'single') {
      nextButton = '<button class="next-question btn btn-secondary">Next question</button>';
    }

    resolve(`
      <h5 class="card-title">${context.question.text}</h5>
      <div class="card-text">
        ${mapper[context.question.type](context.question.items)}
        ${nextButton}
      </div>
    `);
  });
};

export default template;
