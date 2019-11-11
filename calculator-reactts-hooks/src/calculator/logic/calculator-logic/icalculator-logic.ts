/**
 * Calculator Logic interface.
 */
export interface ICalculatorLogic {
  /**
   * Update calculator based on input.
   * @param {string} input - input that occurred.
   * @return {string} current calculator output ( as displayed on screen )
   */
  handleInput: (input: string) => string;
}
