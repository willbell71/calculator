export interface ICalculatorService {
  /**
   * Divide two numbers.
   * @param {number} first - the number to divide into.
   * @param {number} second - the value to divide by.
   * @return {number} result of the division.
   */
  divide: (first: number, second: number) => number;

  /**
   * Subtract two numbers.
   * @param {number} first - the number to subtract from.
   * @param {number} second - the value to subtract.
   * @return {number} result of the subtraction.
   */
  subtract: (first: number, second: number) => number;

  /**
   * Add two numbers.
   * @param {number} first - the number to add to.
   * @param {number} second - the value to add.
   * @return {number} result of the add.
   */
  add: (first: number, second: number) => number;
}
