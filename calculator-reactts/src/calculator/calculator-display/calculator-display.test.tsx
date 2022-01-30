import React from 'react';
import { act, create, ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

import { CalculatorDisplay, TProps } from './calculator-display';

let props: TProps;
let renderer: ReactTestRenderer;
let instance: ReactTestInstance;
beforeEach(async () => {
  props = {
    value: '1234',
    className: ''
  };

  await act(async () => {
    renderer = create(
      <CalculatorDisplay {...props} />
    );
  });

  instance = renderer.root;
});
afterEach(() => jest.restoreAllMocks());

describe('CalculatorDisplay', () => {
  it('should render', () => {
    expect(instance).toBeTruthy();
  });

  it('should render value', async () => {
    const display: ReactTestInstance = instance.findByProps({ 'data-testid': 'calculator-display' });
    expect(display.props.children).toEqual(props.value);
  });
});
