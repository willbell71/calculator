import * as React from 'react';

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
export function CalculatorButton(props: TProps): JSX.Element {
  return (
    <div
      tabIndex={ props.tabIndex }
      className={ `${props.className} calculator-button` }
      onClick={ props.clickHandler }
      onKeyDown={ props.keyHandler }>

      <p>{ props.cap }</p>

    </div>
  );
};
