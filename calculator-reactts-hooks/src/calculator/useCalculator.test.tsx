import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { useCalculator } from './useCalculator';

let value2: number;
let handleInput2: React.Dispatch<string>;
function TestBedComponent(): JSX.Element {
  const {value, handleInput}: {value: number, handleInput: React.Dispatch<string>} = useCalculator();
  value2 = value;
  handleInput2 = handleInput;

  return (<></>);
}

enzyme.configure({ adapter: new Adapter() });

let wrapper: enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = enzyme.shallow(<TestBedComponent/>);
});
afterEach(() => jest.clearAllMocks());

describe('useCalculator', () => {
  it('should output numeric input 0', () => {
    handleInput2('0');

    expect(value2).toEqual(0);
  });

  it('should output numeric input 1', () => {
    handleInput2('1');

    expect(value2).toEqual(1);
  });

  it('should output numeric input 2', () => {
    handleInput2('2');

    expect(value2).toEqual(2);
  });

  it('should output numeric input 3', () => {
    handleInput2('3');

    expect(value2).toEqual(3);
  });

  it('should output numeric input 4', () => {
    handleInput2('4');

    expect(value2).toEqual(4);
  });

  it('should output numeric input 5', () => {
    handleInput2('5');

    expect(value2).toEqual(5);
  });

  it('should output numeric input 6', () => {
    handleInput2('6');

    expect(value2).toEqual(6);
  });

  it('should output numeric input 7', () => {
    handleInput2('7');

    expect(value2).toEqual(7);
  });

  it('should output numeric input 8', () => {
    handleInput2('8');

    expect(value2).toEqual(8);
  });

  it('should output numeric input 9', () => {
    handleInput2('9');

    expect(value2).toEqual(9);
  });

  it('should add input', () => {
    handleInput2('2');
    handleInput2('+');
    handleInput2('2');
    handleInput2('=');

    expect(value2).toEqual(4);
  });

  it('should multiply input', () => {
    handleInput2('2');
    handleInput2('x');
    handleInput2('4');
    handleInput2('=');

    expect(value2).toEqual(8);
  });

  it('should subtract input', () => {
    handleInput2('8');
    handleInput2('-');
    handleInput2('2');
    handleInput2('=');

    expect(value2).toEqual(6);
  });

  it('should divide input', () => {
    handleInput2('1');
    handleInput2('6');
    handleInput2('÷');
    handleInput2('2');
    handleInput2('=');

    expect(value2).toEqual(8);
  });

  it('should reset display after equals', () => {
    handleInput2('1');
    handleInput2('6');
    handleInput2('÷');
    handleInput2('2');
    handleInput2('=');
    handleInput2('1');

    expect(value2).toEqual(1);
  });

  it('should reset display on clear', () => {
    handleInput2('1');
    handleInput2('6');
    handleInput2('clear');

    expect(value2).toEqual(0);
  });

  it('unhandled input should return previous state', () => {
    handleInput2('4');
    handleInput2('r');
    expect(value2).toEqual(4);
  });
});
