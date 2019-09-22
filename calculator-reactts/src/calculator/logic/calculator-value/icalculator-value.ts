/**
 * Calculator Value interface.
 */
export interface ICalculatorValue {
  /**
   * Store a given value.
   * @param {number} value - value to store.
   */
  setValue: (value: number) => void;

  /**
   * Retrieve the value.
   * @return {number} the stored value.
   */
  getValue: () => number;

  /**
   * Push a digit to the store.
   * @param {number} digit - digit to push to the stored value.
   */
  pushDigit: (digit: number) => void;
}
