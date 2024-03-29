import React from 'react';

import { CalculatorButton } from './calculator-button/calculator-button';
import { CalculatorDisplay } from './calculator-display/calculator-display';
import { ICalculatorLogic } from './logic/calculator-logic/icalculator-logic';

import './styles.scss';

/**
 * Component props.
 * @property {ICalculatorLogic} calculatorLogic - calculator logic provider.
 */
export type TProps = {
  calculatorLogic: ICalculatorLogic;
};

type TState = {
  value: string;
};

/**
 * Calculator component.
 */
export class Calculator extends React.Component<TProps, TState> {
  // @member {TState} state - component state.
  public state: TState = {
    value: '0'
  };

  /**
   * Handle mouse click event.
   * @param {React.MouseEvent} event - event that occured.
   */
  public clickButton: (event: React.MouseEvent) => void = (event: React.MouseEvent): void => {
    // pass element that was clicked to input handler
    this.setState({
      value: this.props.calculatorLogic.handleInput((event.target as HTMLElement).innerText)
    });
  };

  /**
   * Handle keyboard selection event ( space or enter ).
   * @param {React.KeyboardEvent} event - event that occurred,
   */
  public pressedKey: (event: React.KeyboardEvent) => void = (event: React.KeyboardEvent): void => {
    if ('Enter' === event.key || ' ' === event.key) {
      if (event.target) {
        this.setState({
          value: this.props.calculatorLogic.handleInput((event.target as HTMLElement).innerText)
        });
      }
    }
  };

  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    // button definitions
    const buttons: {id: number, cap: string, classes: string, testid: string}[] = [{
      id: 0,
      classes: 'calculator__element calculator__element--value calculator__element--small calculator__element--cell-clear',
      cap: 'clear',
      testid: 'clear'
    }, {
      id: 1,
      classes: 'calculator__element calculator__element--action calculator__element--cell-divide',
      cap: '\u00f7',
      testid: 'divide'
    }, {
      id: 2,
      classes: 'calculator__element calculator__element--value calculator__element--cell-seven',
      cap: '7',
      testid: 'seven'
    }, {
      id: 3,
      classes: 'calculator__element calculator__element--value calculator__element--cell-eight',
      cap: '8',
      testid: 'eight'
    }, {
      id: 4,
      classes: 'calculator__element calculator__element--value calculator__element--cell-nine',
      cap: '9',
      testid: 'nine'
    }, {
      id: 5,
      classes: 'calculator__element calculator__element--action calculator__element--cell-multiply',
      cap: 'x',
      testid: 'multiply'
    }, {
      id: 6,
      classes: 'calculator__element calculator__element--value calculator__element--cell-four',
      cap: '4',
      testid: 'four'
    }, {
      id: 7,
      classes: 'calculator__element calculator__element--value calculator__element--cell-five',
      cap: '5',
      testid: 'five'
    }, {
      id: 8,
      classes: 'calculator__element calculator__element--value calculator__element--cell-six',
      cap: '6',
      testid: 'six'
    }, {
      id: 9,
      classes: 'calculator__element calculator__element--action calculator__element--cell-subtract',
      cap: '-',
      testid: 'subtract'
    }, {
      id: 10,
      classes: 'calculator__element calculator__element--value calculator__element--cell-one',
      cap: '1',
      testid: 'one'
    }, {
      id: 11,
      classes: 'calculator__element calculator__element--value calculator__element--cell-two',
      cap: '2',
      testid: 'two'
    }, {
      id: 12,
      classes: 'calculator__element calculator__element--value calculator__element--cell-three',
      cap: '3',
      testid: 'three'
    }, {
      id: 13,
      classes: 'calculator__element calculator__element--action calculator__element--cell-plus',
      cap: '+',
      testid: 'add'
    }, {
      id: 14,
      classes: 'calculator__element calculator__element--value calculator__element--cell-zero',
      cap: '0',
      testid: 'zero'
    }, {
      id: 15,
      classes: 'calculator__element calculator__element--action calculator__element--cell-equal',
      cap: '=',
      testid: 'equal'
    }];

    return (
      <section className="calculator">
        <CalculatorDisplay
          className="calculator__element calculator__element--cell-display"
          value={ this.state.value }
          data-testid="display"
        />

        {buttons.map((button: {id: number, cap: string, classes: string, testid: string}, index: number) => (
          <CalculatorButton
            key={ button.id }
            tabIndex={ index + 1 }
            className={ button.classes }
            cap={ button.cap }
            clickHandler={ this.clickButton }
            keyHandler={ this.pressedKey }
            data-testid={ button.testid }
          />
        ))}
      </section>
    );
  }
}
