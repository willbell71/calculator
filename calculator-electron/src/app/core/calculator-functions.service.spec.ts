import { CalculatorFunctionsService } from './calculator-functions.service';
import { ICalculatorFunctions } from './icalculator-functions';

let calculatorFunctions: ICalculatorFunctions;
describe('CalculatorFunctions', () => {
  beforeEach(() => calculatorFunctions = new CalculatorFunctionsService());

  it('should be created', () => {
    expect(calculatorFunctions).toBeTruthy();
  });

  describe('divide', () => {
    it('should divide the second number into the first', () => {
      expect(calculatorFunctions.divide(8, 2)).toEqual(4);
    });
  });

  describe('multiply', () => {
    it('should multiply the first number by the second', () => {
      expect(calculatorFunctions.multiply(8, 2)).toEqual(16);
    });
  });

  describe('subtract', () => {
    it('should subtract second number from first', () => {
      expect(calculatorFunctions.subtract(7, 2)).toEqual(5);
    });
  });

  describe('add', () => {
    it('should add two nunmbers together', () => {
      expect(calculatorFunctions.add(1, 2)).toEqual(3);
    });
  });
});
