import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorComponent } from './calculator.component';
import { CalculatorButtonComponent } from './calculator-button/calculator-button.component';
import { CalculatorDisplayComponent } from './calculator-display/calculator-display.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    CalculatorButtonComponent,
    CalculatorDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
