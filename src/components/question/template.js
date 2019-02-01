/**
 * Created by Tomasz Gabrysiak @ Infermedica on 08/02/2017.
 */

import html from '../../templates/helpers';

const answersGroupSingle = (items) => {
  return html`
    <form>
      <fieldset class="form-group">
        ${items.map(i => {
          return html`              
            <div class="custom-control custom-radio">
              <input type="radio" id="${i.id}" name="radio" class="custom-control-input">
              <label class="custom-control-label" for="${i.id}">${i.name}</label>
            </div>
          `;
        })}
      </fieldset>
    </form>
  `;
};

const answersGroupMultiple = (items) => {
  return html`
    <form>
      <fieldset class="form-group">
        ${items.map(i => {
          return html`
            <div class="custom-control custom-checkbox">
              <input id="${i.id}" type="checkbox" class="custom-control-input">
              <label for="${i.id}" class="custom-control-label custom-checkbox mb-2 mr-sm-2 mb-sm-0">${i.name}</label>
            </div>     
          `;
        })}
      </fieldset>
    </form>
  `;
};

const answersSingle = () => {
  return html`
    <div>
      <button type="button" data-value="true" class="next-question btn btn-success">Yes</button>
      <button type="button" data-value="false" class="next-question btn btn-danger">No</button>
      <button type="button" data-value="unknown" class="next-question btn btn-info">Skip question</button>
    </div>
  `;
};

const template = (context) => {
  return new Promise((resolve) => {
    const mapper = {
      'group_single': answersGroupSingle,
      'group_multiple': answersGroupMultiple,
      'single': answersSingle
    };
    resolve(html`
      <h5 class="card-title">${context.question.text}</h5>
      <div class="card-text">
        ${mapper[context.question.type](context.question.items)}
        ${context.question.type !== 'single'
          ? `<button class="next-question btn btn-primary">Next question </button>` : ``}
      </div>
    `);
  });
};

export default template;
