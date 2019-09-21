import { IValue } from './ivalue';

export class Value implements IValue {
  // stored value
  private value: number = 0;

  /**
   * Store a given value.
   * @param {number} value - value to store.
   */
  public setValue(value: number): void {
    this.value = value;
  }

  /**
   * Retrieve the value.
   * @return {number} the stored value.
   */
  public getValue(): number {
    return this.value;
  }

  /**
   * Push a digit to the store.
   * @param {number} digit - digit to push to the stored value.
   */
  public pushDigit(digit: number): void {
    this.value = this.value * 10;
    this.value += digit;
  }
}
