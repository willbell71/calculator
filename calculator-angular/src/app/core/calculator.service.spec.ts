import { CalculatorService } from './calculator.service';

let calculatorService: CalculatorService;
describe('CalculatorService', () => {
  beforeEach(() => calculatorService = new CalculatorService());

  it('should be created', () => {
    expect(calculatorService).toBeTruthy();
  });

  describe('divide', () => {
    it('should divide the second number into the first', () => {
      expect(calculatorService.divide(8, 2)).toEqual(4);
    });
  });

  describe('subtract', () => {
    it('should subtract second number from first', () => {
      expect(calculatorService.subtract(7, 2)).toEqual(5);
    });
  });

  describe('add', () => {
    it('should add two nunmbers together', () => {
      expect(calculatorService.add(1, 2)).toEqual(3);
    });
  });
});
