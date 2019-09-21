import { Injectable } from '@angular/core';

import { ICalculator } from './icalculator';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService implements ICalculator {
  /**
   * Constructor.
   */
  public constructor() { }

  /**
   * Divide two numbers.
   * @param {number} first - the number to divide into.
   * @param {number} second - the value to divide by.
   * @return {number} result of the division.
   */
  public divide(first: number, second: number): number {
    return first / second;
  }

  /**
   * Multiply two numbers.
   * @param {number} first - the number to multiply.
   * @param {number} second - the value to multiply by.
   * @return {number} result of the division.
   */
  public multiply(first: number, second: number): number {
    return first * second;
  }

  /**
   * Subtract two numbers.
   * @param {number} first - the number to subtract from.
   * @param {number} second - the value to subtract.
   * @return {number} result of the subtraction.
   */
  public subtract(first: number, second: number): number {
    return first - second;
  }

  /**
   * Add two numbers.
   * @param {number} first - the number to add to.
   * @param {number} second - the value to add.
   * @return {number} result of the add.
   */
  public add(first: number, second: number): number {
    return first + second;
  }
}
