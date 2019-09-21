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
    tabIndex: 1
  };

  wrapper = enzyme.shallow(<CalculatorButton {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('CalculatorButton', () => {
  it('should render', () => {
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').text()).toEqual('test');
  });
});
