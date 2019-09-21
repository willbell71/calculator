import * as React from 'react';

import { CalculatorButton } from './calculator-button/calculator-button';
import { CalculatorDisplay } from './calculator-display/calculator-display';

import './styles.scss';

/**
 * Calculator component.
 */
export class Calculator extends React.Component {
  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    return (
      <section className="calculator">
        <CalculatorDisplay
          className="calculator__element calculator__element--four-wide"
          value="0"/>

        <CalculatorButton
          className="calculator__element calculator__element--value calculator__element--three-wide calculator__element--small"
          cap="clear"/>
        <CalculatorButton
          className="calculator__element calculator__element--action"
          cap="&divide;"/>
        <CalculatorButton
          className="calculator__element calculator__element--value"
          cap="7"/>
        <CalculatorButton
          className="calculator__element calculator__element--value"
          cap="8"/>
        <CalculatorButton
          className="calculator__element calculator__element--value"
          cap="9"/>
        <CalculatorButton
          className="calculator__element calculator__element--action"
          cap="-"/>
        <CalculatorButton
          className="calculator__element calculator__element--value"
          cap="4"/>
        <CalculatorButton
          className="calculator__element calculator__element--value"
          cap="5"/>
        <CalculatorButton
          className="calculator__element calculator__element--value"
          cap="6"/>
        <CalculatorButton
          className="calculator__element calculator__element--action"
          cap="+"/>
        <CalculatorButton
          className="calculator__element calculator__element--value"
          cap="1"/>
        <CalculatorButton
          className="calculator__element calculator__element--value"
          cap="2"/>
        <CalculatorButton
          className="calculator__element calculator__element--value"
          cap="3"/>
        <CalculatorButton
          className="calculator__element calculator__element--action"
          cap="="/>
      </section>
    );
  }
}
