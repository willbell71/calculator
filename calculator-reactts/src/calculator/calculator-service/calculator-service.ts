import { ICalculatorService } from './icalculator-service';

export class CalculatorService implements ICalculatorService {
  /**
   * Divide two numbers.
   * @param {number} first - the number to divide into.
   * @param {number} second - the value to divide by.
   * @return {number} result of the division.
   */
  public divide(first: number, second: number): number {
    return first / second;
  }

  /**
   * Subtract two numbers.
   * @param {number} first - the number to subtract from.
   * @param {number} second - the value to subtract.
   * @return {number} result of the subtraction.
   */
  public subtract(first: number, second: number): number {
    return first - second;
  }

  /**
   * Add two numbers.
   * @param {number} first - the number to add to.
   * @param {number} second - the value to add.
   * @return {number} result of the add.
   */
  public add(first: number, second: number): number {
    return first + second;
  }
}
