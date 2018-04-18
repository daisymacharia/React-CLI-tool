#!/usr/bin/env node ./node_modules/.bin/babel-node

const program = require('commander');

// helpers
const {
  createAction,
  createComponent,
  createInterface,
  createFixture,
  createReducer
} = require('./src/helpers.js');

program
.version('0.0.1')
.description('Learning Map File Generator')
.command('create')
.arguments('<fileType> <fileName> [mode]')
.option('-m, --mode <mode>', 'The mode')
.alias('c')
.description('Create fileType ')
.action((fileType, fileName) => {
  if (fileType && fileType.toLowerCase() === 'component') {
    createComponent(fileName, program.args[3].mode);
  } else if (fileType && fileType.toLowerCase() === 'action') {
    createAction(fileName);
  } else if (fileType && fileType.toLowerCase() === 'reducer') {
    createReducer(fileName);
  } else if (fileType && fileType.toLowerCase() === 'fixture') {
    createFixture(fileName);
  } else if (fileType && fileType.toLowerCase() === 'interface') {
    createInterface(fileName);
  } else {
    console.log(chalk.yellow(`cannot create ${fileType}, please use action, component, interface, fixture or  reducer`));
  }
});

program.on('--help', function(){
  console.log('');
  console.log('  Examples:');
  console.log('');
  console.log('    $ create component example-component -> creates a stateful component');
  console.log('    $ create component example-component --mode=functional  -> creates a functional component');
  console.log('');
});

program.parse(process.argv);
