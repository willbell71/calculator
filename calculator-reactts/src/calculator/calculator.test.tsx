import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Calculator } from './calculator';

enzyme.configure({ adapter: new Adapter() });

let wrapper: enzyme.ShallowWrapper<{}, {}, Calculator>;
beforeEach(() => {
  wrapper = enzyme.shallow(<Calculator/>);
});
afterEach(() => jest.restoreAllMocks());

describe('Calculator', () => {
  it('should render', () => {
    expect(wrapper.find('CalculatorDisplay').length).toEqual(1);
    expect(wrapper.find('CalculatorButton').length).toBeGreaterThan(0);
  });
});
