import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { Calculator } from './calculator';

let value: number = 0;
const handleInputMock: jest.Mock = jest.fn();
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

let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  await act(async () => {
    renderer = create(
      <Calculator />
    );
  });

  instance = renderer.root;
});
afterEach(() => {
  jest.clearAllMocks();
  value = 0;
});

describe('Calculator', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  describe('clickButton', () => {
    it('should call logic for button', async () => {
      const mouseEvent: MouseEvent = { target: { innerText: '8' }} as unknown as MouseEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.clickHandler(mouseEvent));

      expect(handleInputMock).toHaveBeenCalledTimes(1);
      expect(handleInputMock).toHaveBeenCalledWith('8');
    });

    it('should update display value with logic result', async () => {
      const mouseEvent: MouseEvent = { target: { innerText: '8' }} as unknown as MouseEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.clickHandler(mouseEvent));

      const display: ReactTestInstance = instance.findByProps({ 'data-testid': 'display' });
      expect(display.props.value).toEqual('8');
    });
  });

  describe('pressedKey', () => {
    it('should call logic for space', async () => {
      const keyboardEvent: KeyboardEvent = { key: ' ', target: { innerText: '8' }} as unknown as KeyboardEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.keyHandler(keyboardEvent));

      expect(handleInputMock).toHaveBeenCalledTimes(1);
      expect(handleInputMock).toHaveBeenCalledWith('8');
    });

    it('should call logic for enter', async () => {
      const keyboardEvent: KeyboardEvent = { key: 'Enter', target: { innerText: '8' }} as unknown as KeyboardEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.keyHandler(keyboardEvent));

      expect(handleInputMock).toHaveBeenCalledTimes(1);
      expect(handleInputMock).toHaveBeenCalledWith('8');
    });

    it('should NOT call logic for other key', async () => {
      const keyboardEvent: KeyboardEvent = { key: 'a', target: { innerText: '8' }} as unknown as KeyboardEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.keyHandler(keyboardEvent));

      expect(handleInputMock).toHaveBeenCalledTimes(0);
    });

    it('should NOT call logic if no target', async () => {
      const keyboardEvent: React.KeyboardEvent = {key: ' '} as unknown as React.KeyboardEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.keyHandler(keyboardEvent));

      expect(handleInputMock).toHaveBeenCalledTimes(0);
    });

    it('should update display value with logic result', async () => {
      const keyboardEvent: KeyboardEvent = { key: ' ', target: { innerText: '8' }} as unknown as KeyboardEvent;

      const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'eight' });
      await act(async () => button.props.keyHandler(keyboardEvent));

      const display: ReactTestInstance = instance.findByProps({ 'data-testid': 'display' });
      expect(display.props.value).toEqual('8');
    });
  });
});
