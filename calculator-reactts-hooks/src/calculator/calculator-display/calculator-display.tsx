import * as React from 'react';

import './styles.scss';

/**
 * Component props.
 * @property {string} value - value to display.
 * @property {string} className - external class list.
 */
export type TProps = {
  value: string;
  className: string;
};

/**
 * Calculator display component.
 * @return {JSX.Element} component render.
 */
export function CalculatorDisplay(props: TProps): JSX.Element {
  const classes: string = `${props.className} calculator-display`;

  return (
    <div className={classes}>
      <p>{ props.value }</p>
    </div>
  );
}
