/**
 * Created by Tomasz Gabrysiak @ Infermedica on 06/02/2017.
 */

export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  };
  render(){
    this.view.render(this.model.toJSON());
  };
  setView(hash) {
    var validURL = /^#\/[\d]{2}\/[\d]{4}$/.test(hash);

    if (validURL) {
      var matches = hash.match(/^#\/([\d]{2})\/([\d]{4})$/);
      var month = parseInt(matches[1], 10) - 1;
      var year = parseInt(matches[2], 10);

      this.model.setDate(month,year);
    }

    this.render();
  };
}
