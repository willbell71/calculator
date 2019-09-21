import * as React from 'react';

import './styles.scss';

/**
 * Component props.
 * @property {string} cap - button caption.
 * @property {string} className - external class list.
 */
export type TProps = {
  cap: string;
  className: string;
  tabIndex: number;
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
      <div tabIndex={ this.props.tabIndex } className={ classes }>
        <p>{ this.props.cap }</p>
      </div>
    );
  }
}
