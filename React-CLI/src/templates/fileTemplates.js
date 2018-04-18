// stateful component template
const statefulTemplate =
`// React lib import
import * as React from 'react';

//styles
import './filename.scss';

/**
 * Component
 */
class filename extends React.Component<any, any>  {
  constructor(props) {
    super(props);
  }

  /**
   * React component lifecycle method componentDidMount
   *
   * @memberof filename
   * @public
   */
  public componentDidMount() {

  }

  /**
   * Define component's JSX detail
   */
  public render() {
    return (
      <div> </div>
    )
  }
}

export default filename;
`
// functional component template
const functionalTemplate =
`// React lib import
import * as React from 'react';

//styles
import './filename.scss';
/**
 * Component
 */
const filename = (props) => {

  /**
   * Define component's JSX detail
   */
  return (
    '...'
  );
};

export default filename;`

// test template
const testTemplate =
`// react libraries
import * as React from 'react';

// third-party imports
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

// component
import filename from './filename.component';

describe('<filename />', () => {

});`

// scss file template
const scssTemplate =
`// Add scss here
`

// action template
const actionTemplate =
`// imports

/**
 * action creator
 */

/**
 * action thunk
 */
`

// reducer template
const reducerTemplate =
`import initialState from './initialState';

/**
 * @param {object} [state]
 * @param action
 * @returns {object} state
 */
const filename = (state, action) => {
  switch (action.type) {
    case "actiontype":
      return action;
    default:
      return state;
  }
}

export default filename;

`
// fixture file template
const fixtureTemplate =
`// Add fixtures here
`

// interface template
const interfaceTemplate =
`/**
 * Generic interface
 *
 * @interface
 */
`
module.exports = {
  functionalTemplate,
  statefulTemplate,
  actionTemplate,
  reducerTemplate,
  fixtureTemplate,
  interfaceTemplate,
  scssTemplate,
  testTemplate,
};
