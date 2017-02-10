/**
 * Created by Tomasz Gabrysiak @ Infermedica on 03/02/2017.
 */

import _ from 'lodash';

export default class Patient {
  constructor () {
    this.symptoms = {};
    //
    // // mocked data
    this.sex = 'male';
    this.age = 30;
    //
    // this.symptoms = {
    //   's_13': false,
    //   's_1190': false,
    //   's_88': false,
    //   's_98': true,
    //   's_21': true,
    //   's_119': false,
    //   's_156': false,
    //   's_285': false,
    //   's_241': false,
    //   's_50': true,
    //   'p_19': false,
    //   'p_17': false,
    //   'p_15': true,
    //   'p_14': false,
    //   'p_21': false,
    //   'p_13': false,
    //   'p_16': false,
    //   'p_20': false,
    //   'p_18': false,
    //   'p_22': false,
    //   'p_8': false,
    //   'p_10': false,
    //   'p_9': false,
    //   'p_28': true, // additionals
    //   'p_39': true,
    //   's_100': true,
    //   's_604': true,
    //   's_1193': false,
    //   's_25': false,
    //   's_23': false,
    //   's_1197': false,
    //   's_51': false,
    //   's_37': false
    // };
  }

  addEvidence () {
    // TODO
  }

  hasEvidence () {
    // TODO
  }

  toJSON () {
    // TODO
  }

  setSex (s) {
    console.log('Patient::setSex', s);
    this.sex = s;
  }

  setAge (a) {
    console.log('Patient::setAge', a);
    this.age = a;
  }

  addSymptomsGroup (g) {
    console.log('Patient::addSymptomsGroup', g);
    Object.assign(this.symptoms, g);
    console.log(this.symptoms);
  }

  toDiagnosis () {
    console.log('Patient::toDiagnosis');
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
