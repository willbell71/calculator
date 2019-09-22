import * as React from 'react';

import { CalculatorButton } from './calculator-button/calculator-button';
import { CalculatorDisplay } from './calculator-display/calculator-display';
import { ICalculatorLogic } from './logic/calculator-logic/icalculator-logic';

import './styles.scss';

/**
 * Component props.
 * @property {ICalculatorLogic} calculatorLogic - calculator logic provider.
 */
type TProps = {
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
  }

  /**
   * Handle keyboard selection event ( space or enter ).
   * @param {React.KeyboardEvent} event - event that occurred,
   */
  public pressedKey: (event: React.KeyboardEvent) => void = (event: React.KeyboardEvent): void => {
    if ('Enter' === event.key || ' ' === event.key) {
      if (event.target && event.target instanceof HTMLElement) {
        this.setState({
          value: this.props.calculatorLogic.handleInput((event.target as HTMLElement).innerText)
        });
      }
    }
  }

  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    // button definitions
    const buttons: {id: number, cap: string; classes: string}[] = [{
      id: 0,
      classes: 'calculator__element calculator__element--value calculator__element--three-wide calculator__element--small',
      cap: 'clear'
    }, {
      id: 1,
      classes: 'calculator__element calculator__element--action',
      cap: '\u00f7'
    }, {
      id: 2,
      classes: 'calculator__element calculator__element--value',
      cap: '7'
    }, {
      id: 3,
      classes: 'calculator__element calculator__element--value',
      cap: '8'
    }, {
      id: 4,
      classes: 'calculator__element calculator__element--value',
      cap: '9'
    }, {
      id: 5,
      classes: 'calculator__element calculator__element--action',
      cap: 'x'
    }, {
      id: 6,
      classes: 'calculator__element calculator__element--value',
      cap: '4'
    }, {
      id: 7,
      classes: 'calculator__element calculator__element--value',
      cap: '5'
    }, {
      id: 8,
      classes: 'calculator__element calculator__element--value',
      cap: '6'
    }, {
      id: 9,
      classes: 'calculator__element calculator__element--action',
      cap: '-'
    }, {
      id: 10,
      classes: 'calculator__element calculator__element--value',
      cap: '1'
    }, {
      id: 11,
      classes: 'calculator__element calculator__element--value',
      cap: '2'
    }, {
      id: 12,
      classes: 'calculator__element calculator__element--value',
      cap: '3'
    }, {
      id: 13,
      classes: 'calculator__element calculator__element--action',
      cap: '+'
    }, {
      id: 14,
      classes: 'calculator__element calculator__element--value calculator__element--three-wide',
      cap: '0'
    }, {
      id: 15,
      classes: 'calculator__element calculator__element--action',
      cap: '='
    }];

    return (
      <section className="calculator">
        <CalculatorDisplay
          className="calculator__element calculator__element--four-wide"
          value={ this.state.value }/>

        {buttons.map((button: {id: number; cap: string; classes: string}, index: number) => (
          <CalculatorButton
            key={ button.id }
            tabIndex={ index + 1 }
            className={ button.classes }
            cap={ button.cap }
            clickHandler={ this.clickButton }
            keyHandler={ this.pressedKey }                  
          />
        ))}
      </section>
    );
  }
}
