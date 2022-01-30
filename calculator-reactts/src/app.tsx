import React from 'react';
import reactDOM from 'react-dom';

import { Calculator } from './calculator/calculator';
import { CalculatorFunctions } from './calculator/logic/calculator-functions/calculator-functions';
import { CalculatorLogic } from './calculator/logic/calculator-logic/calculator-logic';
import { ICalculatorLogic } from './calculator/logic/calculator-logic/icalculator-logic';

import './styles.scss';

/**
 * App component.
 */
class App extends React.Component {
  // calculator logic
  private calculatorLogic: ICalculatorLogic = new CalculatorLogic(new CalculatorFunctions());

  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    return (
      <main className="container">
        <Calculator calculatorLogic={this.calculatorLogic}/>
      </main>
    );
  }
}

reactDOM.render(<App/>, document.getElementById('app'));
