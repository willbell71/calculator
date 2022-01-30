import React, { FC } from 'react';

import './styles.scss';

/**
 * Component props.
 * @property {string} cap - button caption.
 * @property {string} className - external class list.
 * @property {number} tabIndex - tab index for accessibility.
 * @property {(input: React.MouseEvent) => void} clickHandler - mouse event callback.
 * @property {(input: React.KeyboardEvent) => void} keyHandler - keyboard event callback.
 */
export type TProps = {
  cap: string;
  className: string;
  tabIndex: number;
  clickHandler: (input: React.MouseEvent) => void;
  keyHandler: (input: React.KeyboardEvent) => void;
};

/**
 * Calculator button component.
 * @return {JSX.Element} component rendner.
 */
export const CalculatorButton: FC<TProps> = ({ cap, className, tabIndex, clickHandler, keyHandler}: TProps): JSX.Element => (
  <div
    tabIndex={ tabIndex }
    className={ `${className} calculator-button` }
    onClick={ clickHandler }
    onKeyDown={ keyHandler }
    data-testid="button"
  >

    <p>{ cap }</p>

  </div>
);
