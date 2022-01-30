import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { CalculatorButton, TProps } from './calculator-button';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    cap: 'test',
    className: '',
    tabIndex: 1,
    clickHandler: jest.fn(),
    keyHandler: jest.fn()
  };

  await act(async () => {
    renderer = create(
      <CalculatorButton {...props} />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('CalculatorButton', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should call clickhandle on mouse event', async () => {
    const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'button' });

    await act(async () => button.props.onClick());

    expect(props.clickHandler).toHaveBeenCalledTimes(1);
  });

  it('should call keyhandler on keyboard event', async () => {
    const button: ReactTestInstance = instance.findByProps({ 'data-testid': 'button' });

    await act(async () => button.props.onKeyDown());

    expect(props.keyHandler).toHaveBeenCalledTimes(1);
  });
});
