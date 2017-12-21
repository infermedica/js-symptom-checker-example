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

    res.evidence = _.map(this.symptoms, (symptom, symptomId) => {
      const getChoiceId = (choice) => {
        if (choice === true) {
          return 'present';
        }
        if (_.isUndefined(choice)) {
          return 'unknown';
        }
        if (choice === false) {
          return 'absent';
        }
      };

      let diagnosisSymptom = {
        id: symptomId,
        choice_id: getChoiceId(symptom.reported)
      };

      if (symptom.initial) {
        Object.assign(diagnosisSymptom, {
          initial: true
        });
      }

      if (symptom.related) {
        Object.assign(diagnosisSymptom, {
          related: true
        });
      }

      return diagnosisSymptom;
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
