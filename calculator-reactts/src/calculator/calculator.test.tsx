import React, { KeyboardEvent } from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { Calculator, TProps } from './calculator';
import { ICalculatorLogic } from './logic/calculator-logic/icalculator-logic';

let calculatorLogic: ICalculatorLogic;
let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  calculatorLogic = {
    handleInput: jest.fn().mockImplementation(() => '10')
  };

  props = {
    calculatorLogic
  };

  await act(async () => {
    renderer = create(
      <Calculator {...props} />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('Calculator', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  describe('clickButton', () => {
    it('should call logic for button', async () => {
      const mouseEvent: MouseEvent = { target: { innerText: '8' }} as unknown as MouseEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.clickHandler(mouseEvent));

      expect(calculatorLogic.handleInput).toHaveBeenCalledTimes(1);
      expect(calculatorLogic.handleInput).toHaveBeenCalledWith('8');
    });

    it('should update display value with logic result', async () => {
      const mouseEvent: MouseEvent = { target: { innerText: '8' }} as unknown as MouseEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.clickHandler(mouseEvent));

      const display: ReactTestInstance = instance.findByProps({ 'data-testid': 'display' });
      expect(display.props.value).toEqual('10');
    });
  });

  describe('pressedKey', () => {
    it('should call logic for space', async () => {
      const keyboardEvent: KeyboardEvent = { key: ' ', target: { innerText: '8' }} as unknown as KeyboardEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.keyHandler(keyboardEvent));

      expect(calculatorLogic.handleInput).toHaveBeenCalledTimes(1);
      expect(calculatorLogic.handleInput).toHaveBeenCalledWith('8');
    });

    it('should call logic for enter', async () => {
      const keyboardEvent: KeyboardEvent = { key: 'Enter', target: { innerText: '8' }} as unknown as KeyboardEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.keyHandler(keyboardEvent));

      expect(calculatorLogic.handleInput).toHaveBeenCalledTimes(1);
      expect(calculatorLogic.handleInput).toHaveBeenCalledWith('8');
    });

    it('should NOT call logic for other key', async () => {
      const keyboardEvent: KeyboardEvent = { key: 'a', target: { innerText: '8' }} as unknown as KeyboardEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.keyHandler(keyboardEvent));

      expect(calculatorLogic.handleInput).toHaveBeenCalledTimes(0);
    });

    it('should NOT call logic if no target', async () => {
      const keyboardEvent: KeyboardEvent = {key: ' '} as unknown as KeyboardEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.keyHandler(keyboardEvent));

      expect(calculatorLogic.handleInput).toHaveBeenCalledTimes(0);
    });

    it('should update display value with logic result', async () => {
      const keyboardEvent: KeyboardEvent = { key: ' ', target: { innerText: '8' }} as unknown as KeyboardEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.clickHandler(keyboardEvent));

      const display: ReactTestInstance = instance.findByProps({ 'data-testid': 'display' });
      expect(display.props.value).toEqual('10');
    });
  });
});
