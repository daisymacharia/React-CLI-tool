import { expect } from 'chai';
import * as fs from 'fs-extra';
import * as  path from 'path';

// helpers
import helpers from '../src/helpers.js';

let file;
let folder;

afterEach((done) => {
  if (folder) {
    fs.emptyDirSync(folder)
    fs.remove(folder)
  }
  done();
});

describe('lm-fend CLI', () => {

  describe('converter', () => {
    it('converts to pascalcase', () => {
      const pascalcase = helpers.toPascalCase('testComponent');
      expect(pascalcase).to.equal('TestComponent');
    });

    it('converts to camelcase', () => {
      const camelcase = helpers.toCamelCase('TestComponent');
      expect(camelcase).to.equal('testComponent');
    });
  });

  describe('file generator', () => {
    it('creates an action', () => {
      folder = path.join(process.cwd(), '/src/actions')
      fs.mkdirSync(folder)
      helpers.createAction('TestAction');
      file = `${folder}/testAction.ts`
      expect(fs.existsSync(file)).to.be.true;
    });

    it('creates a reducer', () => {
      folder = path.join(process.cwd(), '/src/reducers')
      fs.mkdirSync(folder)
      helpers.createReducer('TestReducer');
      file = `${folder}/testReducer.ts`
      expect(fs.existsSync(file)).to.be.true;
    });

    it('creates an interface file', () => {
      folder = path.join(process.cwd(), '/src/interfaces')
      fs.mkdirSync(folder)
      helpers.createInterface('TestInterfaces');
      file = `${folder}/testInterfaces.d.ts`
      expect(fs.existsSync(file)).to.be.true;
    });

    it('creates a fixtures file', () => {
      folder = path.join(process.cwd(), '/src/fixtures')
      fs.mkdirSync(folder)
      helpers.createFixture('TestFixtures');
      file = `${folder}/testFixtures.ts`
      expect(fs.existsSync(file)).to.be.true;
    });

    it('creates a functional component', (done) => {
      folder = path.join(process.cwd(), '/src/components')
      fs.mkdirSync(folder)
      helpers.createComponent('TestFunctional', 'functional');
      expect(fs.readdirSync(`${folder}/TestFunctional`)).to.have.members(['TestFunctional.scss',
       'TestFunctional.component.tsx', 'TestFunctional.test.tsx'])
      done();
    });

    it('creates a stateful component', () => {
      folder = path.join(process.cwd(), '/src/components')
      fs.mkdirSync(folder)
      helpers.createComponent('TestStateful', 'stateful');
      expect(fs.readdirSync(`${folder}/TestStateful`)).to.have.members(['TestStateful.scss',
       'TestStateful.component.tsx', 'TestStateful.test.tsx'])
    });
  });
});
