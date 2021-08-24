#!/usr/bin/env node
import commander from 'commander';
import genDiff from '../index.js';

commander
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const result = genDiff(filepath1, filepath2, commander.format);
    console.log(`\n${result}\n`);
  });

commander.parse(process.argv);
