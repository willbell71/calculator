import * as React from 'react';
import * as reactDOM from 'react-dom';

import { Calculator } from './calculator/calculator';
import { CalculatorService } from './calculator/calculator-service/calculator-service';
import { ICalculatorService } from './calculator/calculator-service/icalculator-service';

import './styles.scss';

/**
 * App component.
 */
class App extends React.Component {
  private calculatorService: ICalculatorService = new CalculatorService();

  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    return (
      <main className="container">
        <Calculator service={this.calculatorService}/>
      </main>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));
