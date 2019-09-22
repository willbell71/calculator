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
 */
export class CalculatorButton extends React.Component<TProps> {
  /**
   * Component render.
   * @return {JSX.Element} component rendner.
   */
  public render(): JSX.Element {
    const classes = this.props.className + ' calculator-button';

    return (
      <div
        tabIndex={ this.props.tabIndex }
        className={ classes }
        onClick={ this.props.clickHandler }
        onKeyDown={ this.props.keyHandler }>

        <p>{ this.props.cap }</p>

      </div>
    );
  }
}
