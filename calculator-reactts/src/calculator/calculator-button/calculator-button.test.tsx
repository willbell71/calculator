import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { CalculatorButton, TProps } from './calculator-button';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<TProps, {}, CalculatorButton>;
beforeEach(() => {
  props = {
    cap: 'test',
    className: '',
    tabIndex: 1,
    clickHandler: jest.fn(),
    keyHandler: jest.fn()
  };

  wrapper = enzyme.shallow(<CalculatorButton {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('CalculatorButton', () => {
  it('should render', () => {
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').text()).toEqual('test');
  });

  it('should call clickhandle on mouse event', () => {
    wrapper.find('div').simulate('click');

    expect(props.clickHandler).toHaveBeenCalledTimes(1);
  });

  it('should call keyhandler on keyboard event', () => {
    wrapper.find('div').simulate('keydown');

    expect(props.keyHandler).toHaveBeenCalledTimes(1);
  });
});
