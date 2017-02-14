/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

import _ from 'lodash';

export default class Patient {
  constructor () {
    this.symptoms = {};
    this.sex = 'male';
    this.age = 30;
  }

  setSex (s) {
    this.sex = s;
  }

  setAge (a) {
    this.age = a;
  }

  addSymptomsGroup (g) {
    Object.assign(this.symptoms, g);
  }

  toDiagnosis () {
    let res = {
      sex: this.sex,
      age: this.age,
      evidence: []
    };
    res.evidence = _.map(this.symptoms, (v, k) => {
      const choice = (c) => {
        if (c === true) {
          return 'present';
        }
        if (_.isUndefined(c)) {
          return 'unknown';
        }
        if (c === false) {
          return 'absent';
        }
      };
      return {
        id: k,
        choice_id: choice(v)
      };
    });
    return res;
  }

  reset () {
    this.symptoms = {};
  }
}
