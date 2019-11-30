import * as React from 'react';
import * as reactDOM from 'react-dom';

import { Calculator } from './calculator/calculator';

import './styles.scss';

/**
 * App component.
 * @return {JSX.Element} component render.
 */
function App(): JSX.Element {
  return (
    <div className="container" role="main">
      <Calculator/>
    </div>
  );
}

reactDOM.render(<App/>, document.getElementById('app'));
