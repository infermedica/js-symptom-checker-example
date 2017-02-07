/**
 * Created by Tomasz Gabrysiak @ Infermedica on 06/02/2017.
 */

export default class Model {
// ...
  toJSON() {
    const iso = this.now.toISOString();

    return { iso };
  };
}
