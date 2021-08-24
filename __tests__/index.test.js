import { it, expect } from '@jest/globals';
import path from 'path';
import genDiff from '../src/index.js';

const expected = '{\n  - follow: false,\n    host: hexlet.io,\n  - proxy: 123.234.53.22,\n  - timeout: 50,\n  + timeout: 20,\n  + verbose: true\n}';

it('test genDiff', () => {
  expect(
    genDiff(
      path.resolve(__dirname, '__fixtures__/file1.json'),
      path.resolve(__dirname, '__fixtures__/file2.json'),
    ),
  ).toEqual(expected);
  expect(
    genDiff(
      path.resolve(__dirname, '__fixtures__/file1.yml'),
      path.resolve(__dirname, '__fixtures__/file2.yml'),
    ),
  ).toEqual(expected);
});
