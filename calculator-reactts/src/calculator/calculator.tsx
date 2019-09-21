import * as React from 'react';

import { CalculatorButton } from './calculator-button/calculator-button';
import { CalculatorDisplay } from './calculator-display/calculator-display';
import { ICalculatorService } from './calculator-service/icalculator-service';

import './styles.scss';

/**
 * Component props.
 * @property {ICalculatorService} service - calculator service provider.
 */
type TProps = {
  service: ICalculatorService;
};

/**
 * Calculator component.
 */
export class Calculator extends React.Component<TProps> {
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
      cap: '-'
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
      cap: '+'
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
      cap: '='
    }];


    return (
      <section className="calculator">
        <CalculatorDisplay
          className="calculator__element calculator__element--four-wide"
          value="0"/>

        {buttons.map((button: {id: number; cap: string; classes: string}, index: number) => (
          <CalculatorButton
            key={button.id}
            tabIndex={index+1}
            className={button.classes}
            cap={button.cap}/>
        ))}
      </section>
    );
  }
}
