import { ICalculatorFunctions } from '../calculator-functions/icalculator-functions';
import { CalculatorLogic } from './calculator-logic';
import { ICalculatorLogic } from './icalculator-logic';

let calculatorFunctions: ICalculatorFunctions;
let calculatorLogic: ICalculatorLogic;
beforeEach(() => {
  calculatorFunctions = {
    add: jest.fn().mockImplementation(() => 10),
    subtract: jest.fn().mockImplementation(() => 20),
    divide: jest.fn().mockImplementation(() => 30),
    multiply: jest.fn().mockImplementation(() => 40)
  };

  calculatorLogic = new CalculatorLogic(calculatorFunctions);
});
afterEach(() => jest.restoreAllMocks());

describe('CalculatorLogic', () => {
  it('should be created', () => {
    expect(calculatorLogic).toBeTruthy();
  });

  describe('handleInput', () => {
    it('should ignore unhandled input', () => {
      calculatorLogic.handleInput('4');
      calculatorLogic.handleInput('a');
      calculatorLogic.handleInput('1');
      const out: string = calculatorLogic.handleInput('2');

      expect(out).toEqual('412');
  });

    describe('0', () => {
      it('should return a value with 0', () => {
        const out: string = calculatorLogic.handleInput('0');

        expect(out).toEqual('0');
      });
    });

    describe('1', () => {
      it('should return a value with 1', () => {
        const out: string = calculatorLogic.handleInput('1');

        expect(out).toEqual('1');
      });
    });

    describe('2', () => {
      it('should return a value with 2', () => {
        const out: string = calculatorLogic.handleInput('2');

        expect(out).toEqual('2');
      });
    });

    describe('3', () => {
      it('should return a value with 3', () => {
        const out: string = calculatorLogic.handleInput('3');

        expect(out).toEqual('3');
      });
    });

    describe('4', () => {
      it('should return a value with 4', () => {
        const out: string = calculatorLogic.handleInput('4');

        expect(out).toEqual('4');
      });
    });

    describe('5', () => {
      it('should return a value with 5', () => {
        const out: string = calculatorLogic.handleInput('5');

        expect(out).toEqual('5');
      });
    });

    describe('6', () => {
      it('should return a value with 6', () => {
        const out: string = calculatorLogic.handleInput('6');

        expect(out).toEqual('6');
      });
    });

    describe('7', () => {
      it('should return a value with 7', () => {
        const out: string = calculatorLogic.handleInput('7');

        expect(out).toEqual('7');
      });
    });

    describe('8', () => {
      it('should return a value with 8', () => {
        const out: string = calculatorLogic.handleInput('8');

        expect(out).toEqual('8');
      });
    });

    describe('9', () => {
      it('should return a value with 9', () => {
        const out: string = calculatorLogic.handleInput('9');

        expect(out).toEqual('9');
      });
    });

    describe('clear', () => {
      it('should return 0', () => {
        calculatorLogic.handleInput('9');
        const out: string = calculatorLogic.handleInput('clear');

        expect(out).toEqual('0');
      });
    });

    describe('+', () => {
      it('should call add logic', () => {
        calculatorLogic.handleInput('1');
        calculatorLogic.handleInput('+');
        calculatorLogic.handleInput('2');
        calculatorLogic.handleInput('=');

        expect(calculatorFunctions.add).toHaveBeenCalledTimes(1);
        expect(calculatorFunctions.add).toHaveBeenCalledWith(1, 2);
      });

      it('should return add result', () => {
        calculatorLogic.handleInput('1');
        calculatorLogic.handleInput('+');
        calculatorLogic.handleInput('2');
        const out: string = calculatorLogic.handleInput('=');

        expect(out).toEqual('10');
      });
    });

    describe('-', () => {
      it('should call sub logic', () => {
        calculatorLogic.handleInput('2');
        calculatorLogic.handleInput('-');
        calculatorLogic.handleInput('1');
        calculatorLogic.handleInput('=');

        expect(calculatorFunctions.subtract).toHaveBeenCalledTimes(1);
        expect(calculatorFunctions.subtract).toHaveBeenCalledWith(2, 1);
      });

      it('should return sub result', () => {
        calculatorLogic.handleInput('2');
        calculatorLogic.handleInput('-');
        calculatorLogic.handleInput('1');
        const out: string = calculatorLogic.handleInput('=');

        expect(out).toEqual('20');
      });
    });

    describe('÷', () => {
      it('should call divide logic', () => {
        calculatorLogic.handleInput('4');
        calculatorLogic.handleInput('÷');
        calculatorLogic.handleInput('2');
        calculatorLogic.handleInput('=');

        expect(calculatorFunctions.divide).toHaveBeenCalledTimes(1);
        expect(calculatorFunctions.divide).toHaveBeenCalledWith(4, 2);
      });

      it('should return divide result', () => {
        calculatorLogic.handleInput('4');
        calculatorLogic.handleInput('÷');
        calculatorLogic.handleInput('2');
        const out: string = calculatorLogic.handleInput('=');

        expect(out).toEqual('30');
      });
    });

    describe('x', () => {
      it('should call multiply logic', () => {
        calculatorLogic.handleInput('5');
        calculatorLogic.handleInput('x');
        calculatorLogic.handleInput('2');
        calculatorLogic.handleInput('=');

        expect(calculatorFunctions.multiply).toHaveBeenCalledTimes(1);
        expect(calculatorFunctions.multiply).toHaveBeenCalledWith(5, 2);
      });

      it('should return multiply result', () => {
        calculatorLogic.handleInput('5');
        calculatorLogic.handleInput('x');
        calculatorLogic.handleInput('2');
        const out: string = calculatorLogic.handleInput('=');

        expect(out).toEqual('40');
      });
    });

    describe('=', () => {
      it('should clear input on next digit', () => {
        calculatorLogic.handleInput('5');
        calculatorLogic.handleInput('x');
        calculatorLogic.handleInput('2');
        calculatorLogic.handleInput('=');
        const out: string = calculatorLogic.handleInput('9');

        expect(out).toEqual('9');
      });
    });
  });
});
