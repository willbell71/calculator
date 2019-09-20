import * as React from 'react';
import * as reactDOM from 'react-dom';

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
      <h1>Test!</h1>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));
