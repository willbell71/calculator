import { CalculatorFunctions } from './calculator-functions';
import { ICalculatorFunctions } from './icalculator-functions';

let calculatorFunctions: ICalculatorFunctions;
beforeEach(() => {
  calculatorFunctions = new CalculatorFunctions();
});
afterEach(() => jest.restoreAllMocks());

describe('CalculatorContext', () => {
  describe('divide', () => {
    it('should divide the second number into the first number', () => {
      expect(calculatorFunctions.divide(8, 2)).toEqual(4);
    });
  });

  describe('multiply', () => {
    it('should multiply the first number by the second', () => {
      expect(calculatorFunctions.multiply(8, 2)).toEqual(16);
    });
  });
  
  describe('subtract', () => {
    it('should subtract the second number from the first number', () => {
      expect(calculatorFunctions.subtract(7, 2)).toEqual(5);
    });
  });

  describe('add', () => {
    it('should add the second number to the first number', () => {
      expect(calculatorFunctions.add(3, 2)).toEqual(5);
    });
  });
});
