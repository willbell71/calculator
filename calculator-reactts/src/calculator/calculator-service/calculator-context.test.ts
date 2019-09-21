import { CalculatorService } from './calculator-service';
import { ICalculatorService } from './icalculator-service';

let service: ICalculatorService;
beforeEach(() => {
  service = new CalculatorService();
});
afterEach(() => jest.restoreAllMocks());

describe('CalculatorContext', () => {
  describe('divide', () => {
    it('should divide the second number into the first number', () => {
      expect(service.divide(8, 2)).toEqual(4);
    });
  });

  describe('multiply', () => {
    it('should multiply the first number by the second', () => {
      expect(service.multiply(8, 2)).toEqual(16);
    });
  });
  
  describe('subtract', () => {
    it('should subtract the second number from the first number', () => {
      expect(service.subtract(7, 2)).toEqual(5);
    });
  });

  describe('add', () => {
    it('should add the second number to the first number', () => {
      expect(service.add(3, 2)).toEqual(5);
    });
  });
});
