#!/usr/bin/env node
import commander from 'commander';

commander
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .parse(process.argv);


