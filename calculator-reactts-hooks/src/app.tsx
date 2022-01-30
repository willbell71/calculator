import React, { FC } from 'react';
import reactDOM from 'react-dom';

import { Calculator } from './calculator/calculator';

import './styles.scss';

/**
 * App component.
 * @return {JSX.Element} component render.
 */
const App: FC = (): JSX.Element => (
  <div className="container" role="main">
    <Calculator/>
  </div>
);

reactDOM.render(<App/>, document.getElementById('app'));
