import { CalculatorComponent } from './calculator.component';

import { CalculatorService } from '../core/calculator.service';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let calculatorService: CalculatorService;

  beforeEach(() => {
    calculatorService = {
      add: jasmine.createSpy(),
      subtract: jasmine.createSpy(),
      divide: jasmine.createSpy()
    };
    component = new CalculatorComponent(calculatorService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
