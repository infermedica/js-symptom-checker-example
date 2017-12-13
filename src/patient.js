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

  setSex (sex) {
    this.sex = sex;
  }

  setAge (age) {
    this.age = age;
  }

  addSymptomsGroup (group) {
    Object.assign(this.symptoms, group);
  }

  removeSymptom (id) {
    delete this.symptoms[id];
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

      let e = {
        id: k,
        choice_id: choice(v.reported)
      };

      if (v.initial) {
        Object.assign(e, {
          initial: true
        });
      }

      if (v.related) {
        Object.assign(e, {
          related: true
        });
      }

      return e;
    });
    return res;
  }

  toSuggest () {
    return {
      sex: this.sex,
      age: this.age,
      selected: _.filter(_.keys(this.symptoms), (key) => {
        return this.symptoms[key].reported === true;
      })
    };
  }

  reset () {
    this.symptoms = {};
  }
}
