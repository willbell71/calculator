import * as React from 'react';
import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Calculator } from './calculator';
import { ICalculatorService } from './calculator-service/icalculator-service';

enzyme.configure({ adapter: new Adapter() });

let service: ICalculatorService;
let wrapper: enzyme.ShallowWrapper<{}, {}, Calculator>;
beforeEach(() => {
  service = {
    divide: () => 0,
    multiply: () => 0,
    subtract: () => 0,
    add: () => 0
  };

  wrapper = enzyme.shallow(<Calculator service={service}/>);
});
afterEach(() => jest.restoreAllMocks());

describe('Calculator', () => {
  it('should render', () => {
    expect(wrapper.find('CalculatorDisplay').length).toEqual(1);
    expect(wrapper.find('CalculatorButton').length).toBeGreaterThan(0);
  });
});
