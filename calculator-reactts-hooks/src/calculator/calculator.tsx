import React, { FC } from 'react';

import { CalculatorButton } from './calculator-button/calculator-button';
import { CalculatorDisplay } from './calculator-display/calculator-display';
import { useCalculator } from './useCalculator';

import './styles.scss';

/**
 * Button definition.
 * @property {number} id - unique id.
 * @property {string} cap - button caption.
 * @property {classes} string - list of classes to apply to element in DOM.
 * @property {string} testid - test id of element.
 */
type TButtonDef = {
  id: number;
  cap: string;
  classes: string;
  testid: string;
};

/**
 * Calculator component.
 * @return {JSX.Element} component render.
 */
export const Calculator: FC = (): JSX.Element => {
  const {value, handleInput}: {value: number, handleInput: React.Dispatch<string>} = useCalculator();

  const clickButton: (event: React.MouseEvent) => void = React.useCallback((event: React.MouseEvent): void => {
    handleInput((event.target as HTMLElement).innerText);
  }, [handleInput]);

  const pressedKey: (event: React.KeyboardEvent) => void =  React.useCallback((event: React.KeyboardEvent): void => {
    if ('Enter' === event.key || ' ' === event.key) {
      if (event.target) {
        handleInput((event.target as HTMLElement).innerText);
      }
    }
  }, [handleInput]);

  // button definitions
  const buttons: TButtonDef[] = React.useMemo((): TButtonDef[] => ([{
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
    testid: 'equals'
  }]), []);

  return (
    <section className="calculator">
      <CalculatorDisplay
        className="calculator__element calculator__element--cell-display"
        value={ `${value}` }
        data-testid="display"
      />

      {buttons.map((button: TButtonDef, index: number) => (
        <CalculatorButton
          key={ button.id }
          tabIndex={ index + 1 }
          className={ button.classes }
          cap={ button.cap }
          clickHandler={ clickButton }
          keyHandler={ pressedKey }
          data-testid={ button.testid }
        />
      ))}
    </section>
  );
};
