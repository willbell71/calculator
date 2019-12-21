import { Component, OnInit, Input } from '@angular/core';

/**
 * Calculate display component.
 */
@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.scss']
})
export class CalculatorDisplayComponent implements OnInit {
  // @member {string} value - value to display
  @Input()
  public value: string = '0';

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
