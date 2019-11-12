import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Calculator } from './calculator';
import { ICalculatorLogic } from './logic/calculator-logic/icalculator-logic';

enzyme.configure({ adapter: new Adapter() });

let calculatorLogic: ICalculatorLogic;
let wrapper: enzyme.ShallowWrapper;
beforeEach(() => {
  calculatorLogic = {
    handleInput: jest.fn().mockImplementation(() => '10')
  };

  wrapper = enzyme.shallow(<Calculator calculatorLogic={calculatorLogic}/>);
});
afterEach(() => jest.restoreAllMocks());

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

      expect(calculatorLogic.handleInput).toHaveBeenCalledTimes(1);
      expect(calculatorLogic.handleInput).toHaveBeenCalledWith('8');
    });

    it('should update display value with logic result', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const mouseEvent: React.MouseEvent = {target} as unknown as React.MouseEvent;

      (wrapper.find('CalculatorButton').at(0).prop('clickHandler') as (event: React.MouseEvent) => void)(mouseEvent);

      expect(wrapper.find('CalculatorDisplay').prop('value')).toEqual('10');
    });
  });

  describe('pressedKey', () => {
    it('should call logic for space', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: React.KeyboardEvent = {key: ' ', target} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(calculatorLogic.handleInput).toHaveBeenCalledTimes(1);
      expect(calculatorLogic.handleInput).toHaveBeenCalledWith('8');
    });

    it('should call logic for enter', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: React.KeyboardEvent = {key: 'Enter', target} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(calculatorLogic.handleInput).toHaveBeenCalledTimes(1);
      expect(calculatorLogic.handleInput).toHaveBeenCalledWith('8');
    });

    it('shouldnt call logic for other key', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: React.KeyboardEvent = {key: 'a', target} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(calculatorLogic.handleInput).toHaveBeenCalledTimes(0);
    });

    it('shouldnt call logic if no target', () => {
      const keyboardEvent: React.KeyboardEvent = {key: ' '} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(calculatorLogic.handleInput).toHaveBeenCalledTimes(0);
    });

    it('shouldnt call logic if target isnt a HTML Element', () => {
      const target: HTMLElement = {innerText: '8'} as unknown as HTMLElement;
      const keyboardEvent: React.KeyboardEvent = {key: ' ', target} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(calculatorLogic.handleInput).toHaveBeenCalledTimes(0);
    });

    it('should update display value with logic result', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: React.KeyboardEvent = {key: ' ', target} as unknown as React.KeyboardEvent;

      (wrapper.find('CalculatorButton').at(0).prop('keyHandler') as (event: React.KeyboardEvent) => void)(keyboardEvent);

      expect(wrapper.find('CalculatorDisplay').prop('value')).toEqual('10');
    });
  });
});
