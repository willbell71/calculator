import React, { FC } from 'react';

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
export const CalculatorDisplay: FC<TProps> = ({ className, value }: TProps): JSX.Element => (
  <div className={ `${className} calculator-display` }>
    <p data-testid="calculator-display">{ value }</p>
  </div>
);
