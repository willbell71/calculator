import { Component, OnInit, Input } from '@angular/core';

/**
 * Calculate button component.
 */
@Component({
  selector: 'app-calculator-button',
  templateUrl: './calculator-button.component.html',
  styleUrls: ['./calculator-button.component.scss']
})
export class CalculatorButtonComponent implements OnInit {
  // @member {string} cap - button caption.
  @Input()
  public cap: string = '';

  /**
   * Constructor.
   */
  public constructor() { }

  /**
   * On init lifecycle.
   */
  public ngOnInit(): void {
  }
}
