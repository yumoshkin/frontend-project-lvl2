import fs from 'fs';
import path from 'path';
import _ from 'lodash';

const getData = (filepath) => {
  const fp = path.resolve(filepath);
  console.log('fp', fp);
  const type = path.extname(fp).slice(1);
  const data = fs.readFileSync(fp, 'utf8');

  if (type === 'json') {
    return JSON.parse(data);
  }

  return data;
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

  return result;
};

export default genDiff;
