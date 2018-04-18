// third party libraries
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

// file template imports
const template = require('./templates/fileTemplates');

/**
 * create a component directory containing a test file, scss file and component file
 *
 * @param  {string} fileName name of the component
 * @param  {string} mode     functional || stateful component,
 *                           default is stateful
 * @return {object}          component files created
 */
const createComponent =  (fileName, mode) => {
  const pascalCaseName = toPascalCase(fileName);
  const componentDir = path.join(process.cwd(), `/src/components/${pascalCaseName}/`);

  if (!mode || mode.toUpperCase() === "STATEFUL") {
    createFiles(componentDir, fileName, '.component.tsx', template.statefulTemplate, 'pascalcase');
  } else if (mode && mode.toUpperCase() === "FUNCTIONAL") {
    createFiles(componentDir, fileName, '.component.tsx', template.functionalTemplate, 'pascalcase');
  } else {
    return (console.log(chalk.yellow('Warning: component mode should be functional or stateful')));
  }

  createFiles(componentDir, fileName, '.scss', template.scssTemplate, 'pascalcase');
  createFiles(componentDir, fileName, '.test.tsx', template.testTemplate, 'pascalcase');
};

/**
 * creates action files
 *
 * @param  {string} fileName file name of action to be created
 * @return {object}          action created
 */
const createAction = (fileName) => {
  const actionDir = path.join(process.cwd(), '/src/actions/');
  console.log('adding action');
  createFiles(actionDir, fileName, '.ts', template.actionTemplate, 'camelcase');
};

/**
 * creates reducer files
 *
 * @param  {string} fileName file name of reducer to be created
 * @return {object}          reducer created
 */
const createReducer = (fileName) => {
  const reducerDir = path.join(process.cwd(), '/src/reducers/');
  console.log('adding reducer');
  createFiles(reducerDir, fileName, '.ts', template.reducerTemplate, 'camelcase');
};

/**
 * creates fixture files
 *
 * @param  {string} fileName file name of fixture to be created
 * @return {object}          fixture file created
 */
const createFixture = (fileName) => {
  const fixtureDir = path.join(process.cwd(), '/src/fixtures/');
  console.log('adding fixture');
  createFiles(fixtureDir, fileName, '.ts', template.fixtureTemplate, 'camelcase');
};

/**
 * creates interface files
 *
 * @param  {string} fileName file name of interface to be created
 * @return {object}          interface file created
 */
const createInterface = (fileName) => {
  const interfaceDir = path.join(process.cwd(), '/src/interfaces/');
  console.log('adding interface');
  createFiles(interfaceDir, fileName, '.d.ts', template.interfaceTemplate, 'camelcase');
};

/**
 * convert file names to PascalCase
 *
 * @param  {string} fileName name of the file
 * @return {string}     name converted to PascalCase
 */
const toPascalCase = (fileName) => {
  return fileName.split('-').map(word => word.charAt(0).toUpperCase().concat(word.slice(1)))
  .join('');
};

/**
 * convert file names to camelCase
 *
 * @param  {string} fileName name of the file
 * @return {string} name     name converted to camelCase
 */
const toCamelCase = (fileName) => {
  const filename = toPascalCase(fileName);
  return filename[0].toLowerCase().concat(filename.slice(1));
};

/**
 * creates various kinds of files, actions, reducers, components, fixtures etc
 *
 * @param  {string} path       path of the file to be created
 * @param  {string} fileName   name of the file to be created
 * @param  {string} fileext    extension of the file to be created
 * @param  {object} template   template of data used
 * @param  {string} wordcase   naming convention for the file
 * @return {object}            the file created
 */
const createFiles = (Path, fileName, fileext, template, wordcase) => {
  if (wordcase && wordcase === 'pascalcase') {
    const pascalCaseName = toPascalCase(fileName);
    const pascalCaseFile = `${Path}${pascalCaseName}${fileext}`;

    if (!fs.existsSync(Path)) {
      fs.mkdirSync(Path);
      console.log('adding component');
    }

    if (!fs.existsSync(pascalCaseFile)) {
      fs.writeFileSync(pascalCaseFile, template.replace(/filename/g, pascalCaseName));
      console.log(chalk.green('create'), pascalCaseFile);
    } else {
      return console.log(chalk.red('Error: filename already exists'));
    }

  } else if (wordcase && wordcase === 'camelcase') {
    const camelCaseName = toCamelCase(fileName);
    const camelCaseFile = `${Path}${camelCaseName}${fileext}`;

    if (!fs.existsSync(camelCaseFile)) {
      fs.writeFileSync(camelCaseFile, template.replace(/filename/g, camelCaseName));
      console.log(chalk.green('create'), camelCaseFile);
    } else {
      return console.log(chalk.red('Error: filename already exists'));
    }

  }
};

module.exports = {
  helpers: createFiles,
    toCamelCase,
    toPascalCase,
    createReducer,
    createComponent,
    createFixture,
    createAction,
    createInterface,
  }
