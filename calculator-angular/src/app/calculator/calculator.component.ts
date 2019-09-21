import { Component, OnInit } from '@angular/core';

import { CalculatorService } from '../core/calculator.service';

/**
 * Calculator component.
 */
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  /**
   * Constructor.
   * @param {calculatorService} calculator - calculator service provider.
   */
  public constructor(private calculator: CalculatorService) { }

  /**
   * On init lifecycle.
   */
  public ngOnInit(): void {
  }
}
