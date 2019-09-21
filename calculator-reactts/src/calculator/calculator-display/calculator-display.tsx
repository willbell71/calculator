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
 * Calculator display.
 */
export class CalculatorDisplay extends React.Component<TProps> {
  /**
   * Render.
   * @return {JSX.Element} component render.
   */
  public render(): JSX.Element {
    const classes = this.props.className + ' calculator-display';

    return (
      <div className={classes}>
        <p>{ this.props.value }</p>
      </div>
    );
  }
}
