import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { CalculatorDisplay, TProps } from './calculator-display';

enzyme.configure({ adapter: new Adapter() });

let props: TProps;
let wrapper: enzyme.ShallowWrapper<TProps, {}, CalculatorDisplay>;
beforeEach(() => {
  props = {
    value: '1234',
    className: ''
  };

  wrapper = enzyme.shallow(<CalculatorDisplay {...props}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('CalculatorDisplay', () => {
  it('should render', () => {
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').text()).toEqual('1234');
  });
});
