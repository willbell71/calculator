import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Calculator } from './calculator';

let value: number = 0;
let handleInputMock: jest.Mock = jest.fn();
let calculator: {value: number, handleInput: React.Dispatch<string>} = {
  value,
  handleInput: handleInputMock.mockImplementation((key: string) => {
    calculator = {
      ...calculator,
      value: parseInt(key, 10)
    };
  })
};
jest.mock('./useCalculator', jest.fn().mockImplementation(() => ({
  __es6module__: true,
  useCalculator: jest.fn().mockImplementation(() => calculator)
})));

enzyme.configure({ adapter: new Adapter() });

let wrapper: enzyme.ShallowWrapper;
beforeEach(() => {
  wrapper = enzyme.shallow(<Calculator/>);
});
afterEach(() => {
  jest.clearAllMocks();
  value = 0;
});

describe('Calculator', () => {
  it('should render', () => {
    expect(wrapper.find('CalculatorDisplay').length).toEqual(1);
    expect(wrapper.find('CalculatorButton').length).toBeGreaterThan(0);
  });

  describe('clickButton', () => {
    it('should call logic for button', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const mouseEvent: React.MouseEvent = {target} as unknown as React.MouseEvent;

      (wrapper.find('CalculatorButton').at(0).prop('clickHandler') as (event: React.MouseEvent) => void)(mouseEvent);

      expect(handleInputMock).toHaveBeenCalledTimes(1);
      expect(handleInputMock).toHaveBeenCalledWith('8');
    });

    it('should update display value with logic result', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const mouseEvent: React.MouseEvent = {target} as unknown as React.MouseEvent;

      (wrapper.find('CalculatorButton').at(0).prop('clickHandler') as (event: React.MouseEvent) => void)(mouseEvent);

      expect(wrapper.find('CalculatorDisplay').prop('value')).toEqual('8');
    });
  });

  describe('pressedKey', () => {
    it('should call logic for space', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: React.KeyboardEvent = {key: ' ', target} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(handleInputMock).toHaveBeenCalledTimes(1);
      expect(handleInputMock).toHaveBeenCalledWith('8');
    });

    it('should call logic for enter', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: React.KeyboardEvent = {key: 'Enter', target} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(handleInputMock).toHaveBeenCalledTimes(1);
      expect(handleInputMock).toHaveBeenCalledWith('8');
    });

    it('shouldnt call logic for other key', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: React.KeyboardEvent = {key: 'a', target} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(handleInputMock).toHaveBeenCalledTimes(0);
    });

    it('shouldnt call logic if no target', () => {
      const keyboardEvent: React.KeyboardEvent = {key: ' '} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(handleInputMock).toHaveBeenCalledTimes(0);
    });

    it('shouldnt call logic if target isnt a HTML Element', () => {
      const target: HTMLElement = {innerText: '8'} as unknown as HTMLElement;
      const keyboardEvent: React.KeyboardEvent = {key: ' ', target} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(handleInputMock).toHaveBeenCalledTimes(0);
    });

    it('should update display value with logic result', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: React.KeyboardEvent = {key: ' ', target} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(wrapper.find('CalculatorDisplay').prop('value')).toEqual('8');
    });
  });
});
