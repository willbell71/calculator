import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;

  beforeEach(() => {
    component = new CalculatorComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
