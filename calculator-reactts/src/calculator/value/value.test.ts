import { IValue } from './ivalue';
import { Value } from './value';

let value: IValue;
describe('Value', () => {
  beforeEach(() => value = new Value());

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
