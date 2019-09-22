import { ICalculatorValue } from './icalculator-value';
import { CalculatorValue } from './calculator-value';

let value: ICalculatorValue;
describe('CalculatorValue', () => {
  beforeEach(() => value = new CalculatorValue());

  it('should be created', () => {
    expect(value).toBeTruthy();
  });

  describe('setValue and getValue', () => {
    it('should be able to set and get a value', () => {
      value.setValue(10);

      expect(value.getValue()).toEqual(10);

      value.setValue(6);

      expect(value.getValue()).toEqual(6);
    });
  });

  describe('pushDigit', () => {
    it('should be push a new digit on to the end of an existing value', () => {
      value.setValue(10);

      value.pushDigit(3);

      expect(value.getValue()).toEqual(103);
    });
  });
});
