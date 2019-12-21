import { Component, OnInit } from '@angular/core';

import { CalculatorLogicService } from '../core/calculator-logic.service';

/**
 * Calculator component.
 */
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  // @member {{cap: string; classes: string}[]} buttons - list of buttons to build the calculator UI.
  public buttons: {cap: string; classes: string}[] = [];

  // @member {string} value - current value display on the calculator.
  public value: string = '0';

  /**
   * Constructor.
   * @param {CalculatorLogicService} calculatorLogic - calculator logic service provider.
   */
  public constructor(private calculatorLogic: CalculatorLogicService) {
    // button definitions
    this.buttons = [{
      classes: 'calculator__element calculator__element--value calculator__element--three-wide calculator__element--small',
      cap: 'clear'
    }, {
      classes: 'calculator__element calculator__element--action',
      cap: '\u00f7'
    }, {
      classes: 'calculator__element calculator__element--value',
      cap: '7'
    }, {
      classes: 'calculator__element calculator__element--value',
      cap: '8'
    }, {
      classes: 'calculator__element calculator__element--value',
      cap: '9'
    }, {
      classes: 'calculator__element calculator__element--action',
      cap: 'x'
    }, {
      classes: 'calculator__element calculator__element--value',
      cap: '4'
    }, {
      classes: 'calculator__element calculator__element--value',
      cap: '5'
    }, {
      classes: 'calculator__element calculator__element--value',
      cap: '6'
    }, {
      classes: 'calculator__element calculator__element--action',
      cap: '-'
    }, {
      classes: 'calculator__element calculator__element--value',
      cap: '1'
    }, {
      classes: 'calculator__element calculator__element--value',
      cap: '2'
    }, {
      classes: 'calculator__element calculator__element--value',
      cap: '3'
    }, {
      classes: 'calculator__element calculator__element--action',
      cap: '+'
    }, {
      classes: 'calculator__element calculator__element--value calculator__element--three-wide',
      cap: '0'
    }, {
      classes: 'calculator__element calculator__element--action',
      cap: '='
    }];
  }

  /**
   * On init lifecycle.
   */
  public ngOnInit(): void {
  }

  /**
   * Handle mouse click event.
   * @param {MouseEvent} event - event that occured.
   */
  public clickButton(event: MouseEvent): void {
    // pass element that was clicked to input handler
    this.value = this.calculatorLogic.handleInput((event.target as HTMLElement).innerText);
  }

  /**
   * Handle keyboard selection event ( space or enter ).
   * @param {KeyboardEvent} event - event that occurred,
   */
  public pressedKey(event: KeyboardEvent): void {
    if ('Enter' === event.key || ' ' === event.key) {
      if (event.target && event.target instanceof HTMLElement) {
        this.value = this.calculatorLogic.handleInput((event.target as HTMLElement).innerText);
      }
    }
  }
}
