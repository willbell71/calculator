import { Injectable } from '@angular/core';

import { CalculatorFunctionsService } from './calculator-functions.service';
import { CalculatorValue } from './calculator-value';
import { ICalculatorLogic } from './icalculator-logic';
import { ICalculatorValue } from './icalculator-value';

/**
 * Calculator logic service.
 */
@Injectable({
  providedIn: 'root'
})
export class CalculatorLogicService implements ICalculatorLogic {
  // current value being entered
  private currentValue: ICalculatorValue = new CalculatorValue();
  // any previous value, required for an operation ( ie first term in an add, subtract etc. )
  private previousValue: number = 0;
  // the current operation, such as + or - etc.
  private operation: string | undefined = undefined;

  /**
   * Constructor.
   * @param {CalculatorFunctions} calculator - calculator functions service provider.
   */
  public constructor(private calculator: CalculatorFunctionsService) {}

  /**
   * Apply operation to current values.
   */
  private applyOperation(): void {
    switch (this.operation) {
      case '÷': this.previousValue = this.calculator.divide(this.previousValue, this.currentValue.getValue()); break;
      case '-': this.previousValue = this.calculator.subtract(this.previousValue, this.currentValue.getValue()); break;
      case '+': this.previousValue = this.calculator.add(this.previousValue, this.currentValue.getValue()); break;
      case 'x': this.previousValue = this.calculator.multiply(this.previousValue, this.currentValue.getValue()); break;
      default: break;
    }
  }

  /**
   * Update calculator based on input.
   * @param {string} input - input that occurred.
   * @return {string} current calculator output ( as displayed on screen )
   */
  public handleInput(input: string): string {
    switch (input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if ('=' === this.operation) {
          this.operation = undefined;
          this.currentValue.setValue(0);
        }

        this.currentValue.pushDigit(parseInt(input, 10));
        break;
      case 'clear':
        this.currentValue.setValue(0);
        this.previousValue = 0;
        this.operation = undefined;
        break;
      case '÷':
      case '-':
      case '+':
      case 'x':
        this.applyOperation();

        this.previousValue = this.currentValue.getValue();
        this.currentValue.setValue(0);
        this.operation = input;
        break;
      case '=':
        this.applyOperation();

        this.currentValue.setValue(this.previousValue);
        this.previousValue = 0;
        this.operation = '=';
        break;
      default: break;
    }

    return `${this.currentValue.getValue()}`;
  }
}
