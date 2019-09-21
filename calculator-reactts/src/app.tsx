import * as React from 'react';
import * as reactDOM from 'react-dom';

import { Calculator } from './calculator/calculator';

import './styles.scss';

/**
 * App component.
 */
class App extends React.Component {
  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    return (
      <main className="container">
        <Calculator/>
      </main>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));
