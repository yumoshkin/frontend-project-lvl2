import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import parse from './parsers.js';

const getData = (filepath) => {
  const fp = path.resolve(filepath);
  const type = path.extname(fp).slice(1);
  const data = fs.readFileSync(fp, 'utf8');

  return parse(data, type);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);
  let result = {};

  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort();
  keys.forEach((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (_.has(data1, key) && !_.has(data2, key)) {
      result = { ...result, [`- ${key}`]: value1 };
    } else if (!_.has(data1, key) && _.has(data2, key)) {
      result = { ...result, [`+ ${key}`]: value2 };
    } else if (value1 !== value2) {
      result = { ...result, [`- ${key}`]: value1, [`+ ${key}`]: value2 };
    } else {
      result = { ...result, [`  ${key}`]: value1 };
    }
  });

  return _.replace(JSON.stringify(result, null, 2), /"/g, '');
};

export default genDiff;
