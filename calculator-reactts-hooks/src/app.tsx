import * as React from 'react';
import * as reactDOM from 'react-dom';

import { Calculator } from './calculator/calculator';
import { CalculatorFunctions } from './calculator/logic/calculator-functions/calculator-functions';
import { CalculatorLogic } from './calculator/logic/calculator-logic/calculator-logic';
import { ICalculatorLogic } from './calculator/logic/calculator-logic/icalculator-logic';

import './styles.scss';

/**
 * App component.
 * @return {JSX.Element} component render.
 */
function App(): JSX.Element {
  // calculator logic
  const calculatorLogic: ICalculatorLogic = new CalculatorLogic(new CalculatorFunctions());

  return (
    <div className="container" role="main">
      <Calculator calculatorLogic={calculatorLogic}/>
    </div>
  );
}

reactDOM.render(<App/>, document.getElementById('app'));
