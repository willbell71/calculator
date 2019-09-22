import { CalculatorComponent } from './calculator.component';

import { CalculatorLogicService } from '../core/calculator-logic.service';
import { ICalculatorLogic } from '../core/icalculator-logic';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let calculatorLogicService: ICalculatorLogic;

  beforeEach(() => {
    calculatorLogicService = {
      handleInput: jasmine.createSpy().and.returnValue('10')
    };
    component = new CalculatorComponent(calculatorLogicService as unknown as CalculatorLogicService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('clickButton', () => {
    it('should call logic for button', () => {
      const target: HTMLElement = {innerText: '8'} as unknown as HTMLElement;
      const mouseEvent: MouseEvent = {target} as unknown as MouseEvent;

      component.clickButton(mouseEvent);

      expect(calculatorLogicService.handleInput).toHaveBeenCalledTimes(1);
      expect(calculatorLogicService.handleInput).toHaveBeenCalledWith('8');
    });

    it('should update display value with logic result', () => {
      const target: HTMLElement = {innerText: '8'} as unknown as HTMLElement;
      const mouseEvent: MouseEvent = {target} as unknown as MouseEvent;

      component.clickButton(mouseEvent);

      expect(component.value).toEqual('10');
    });
  });

  describe('pressedKey', () => {
    it('should call logic for space', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: KeyboardEvent = {key: ' ', target} as unknown as KeyboardEvent;

      component.pressedKey(keyboardEvent);

      expect(calculatorLogicService.handleInput).toHaveBeenCalledTimes(1);
      expect(calculatorLogicService.handleInput).toHaveBeenCalledWith('8');
    });

    it('should call logic for enter', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: KeyboardEvent = {key: 'Enter', target} as unknown as KeyboardEvent;

      component.pressedKey(keyboardEvent);

      expect(calculatorLogicService.handleInput).toHaveBeenCalledTimes(1);
      expect(calculatorLogicService.handleInput).toHaveBeenCalledWith('8');
    });

    it('shouldnt call logic for other key', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: KeyboardEvent = {key: 'a', target} as unknown as KeyboardEvent;

      component.pressedKey(keyboardEvent);

      expect(calculatorLogicService.handleInput).toHaveBeenCalledTimes(0);
    });

    it('shouldnt call logic if no target', () => {
      const keyboardEvent: KeyboardEvent = {key: ' '} as unknown as KeyboardEvent;

      component.pressedKey(keyboardEvent);

      expect(calculatorLogicService.handleInput).toHaveBeenCalledTimes(0);
    });

    it('shouldnt call logic if target isnt a HTML Element', () => {
      const target: HTMLElement = {innerText: '8'} as unknown as HTMLElement;
      const keyboardEvent: KeyboardEvent = {key: ' ', target} as unknown as KeyboardEvent;

      component.pressedKey(keyboardEvent);

      expect(calculatorLogicService.handleInput).toHaveBeenCalledTimes(0);
    });

    it('should update display value with logic result', () => {
      const target: HTMLElement = document.createElement('p');
      target.innerText = '8';
      const keyboardEvent: KeyboardEvent = {key: ' ', target} as unknown as KeyboardEvent;

      component.pressedKey(keyboardEvent);

      expect(component.value).toEqual('10');
    });
  });
});
