import * as React from 'react';

import { CalculatorButton } from './calculator-button/calculator-button';
import { CalculatorDisplay } from './calculator-display/calculator-display';
import { useCalculator } from './useCalculator';

import './styles.scss';

/**
 * Button definition.
 * @property {number} id - unique id.
 * @property {string} cap - button caption.
 * @property {classes} string - list of classes to apply to element in DOM.
 */
type TButtonDef = {
  id: number;
  cap: string;
  classes: string
};

/**
 * Calculator component.
 * @return {JSX.Element} component render.
 */
export function Calculator(): JSX.Element {
  const {value, handleInput}: {value: number, handleInput: React.Dispatch<string>} = useCalculator();

  const clickButton: (event: React.MouseEvent) => void = React.useCallback((event: React.MouseEvent): void => {
    handleInput((event.target as HTMLElement).innerText);
  }, [handleInput]);

  const pressedKey: (event: React.KeyboardEvent) => void =  React.useCallback((event: React.KeyboardEvent): void => {
    if ('Enter' === event.key || ' ' === event.key) {
      if (event.target && event.target instanceof HTMLElement) {
        handleInput((event.target as HTMLElement).innerText);
      }
    }
  }, [handleInput]);

  // button definitions
  const buttons: TButtonDef[] = React.useMemo((): TButtonDef[] => ([{
    id: 0,
    classes: 'calculator__element calculator__element--value calculator__element--small calculator__element--cell-clear',
    cap: 'clear'
  }, {
    id: 1,
    classes: 'calculator__element calculator__element--action calculator__element--cell-divide',
    cap: '\u00f7'
  }, {
    id: 2,
    classes: 'calculator__element calculator__element--value calculator__element--cell-seven',
    cap: '7'
  }, {
    id: 3,
    classes: 'calculator__element calculator__element--value calculator__element--cell-eight',
    cap: '8'
  }, {
    id: 4,
    classes: 'calculator__element calculator__element--value calculator__element--cell-nine',
    cap: '9'
  }, {
    id: 5,
    classes: 'calculator__element calculator__element--action calculator__element--cell-multiply',
    cap: 'x'
  }, {
    id: 6,
    classes: 'calculator__element calculator__element--value calculator__element--cell-four',
    cap: '4'
  }, {
    id: 7,
    classes: 'calculator__element calculator__element--value calculator__element--cell-five',
    cap: '5'
  }, {
    id: 8,
    classes: 'calculator__element calculator__element--value calculator__element--cell-six',
    cap: '6'
  }, {
    id: 9,
    classes: 'calculator__element calculator__element--action calculator__element--cell-subtract',
    cap: '-'
  }, {
    id: 10,
    classes: 'calculator__element calculator__element--value calculator__element--cell-one',
    cap: '1'
  }, {
    id: 11,
    classes: 'calculator__element calculator__element--value calculator__element--cell-two',
    cap: '2'
  }, {
    id: 12,
    classes: 'calculator__element calculator__element--value calculator__element--cell-three',
    cap: '3'
  }, {
    id: 13,
    classes: 'calculator__element calculator__element--action calculator__element--cell-plus',
    cap: '+'
  }, {
    id: 14,
    classes: 'calculator__element calculator__element--value calculator__element--cell-zero',
    cap: '0'
  }, {
    id: 15,
    classes: 'calculator__element calculator__element--action calculator__element--cell-equal',
    cap: '='
  }]), []);

  return (
    <section className="calculator">
      <CalculatorDisplay
        className="calculator__element calculator__element--cell-display"
        value={ `${value}` }/>

      {buttons.map((button: TButtonDef, index: number) => (
        <CalculatorButton
          key={ button.id }
          tabIndex={ index + 1 }
          className={ button.classes }
          cap={ button.cap }
          clickHandler={ clickButton }
          keyHandler={ pressedKey }                  
        />
      ))}
    </section>
  );
}
