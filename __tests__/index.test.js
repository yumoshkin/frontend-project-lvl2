import { it, expect } from '@jest/globals';
import genDiff from '../src/index.js';

const expected = '{\n  - follow: false,\n    host: hexlet.io,\n  - proxy: 123.234.53.22,\n  - timeout: 50,\n  + timeout: 20,\n  + verbose: true\n}';

it('test genDiff', () => {
  expect(genDiff('__fixtures__/file1.json', '__fixtures__/file2.json')).toEqual(expected);
});
