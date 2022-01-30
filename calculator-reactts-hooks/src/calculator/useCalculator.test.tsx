import { Dispatch } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { useCalculator } from './useCalculator';

let result: { value: number, handleInput: Dispatch<string> };
beforeEach(async () => {
  await act(async () => {
    renderHook(() => {
      result = useCalculator();
    });
  });
});
afterEach(() => jest.clearAllMocks());

describe('useCalculator', () => {
  it('should output numeric input 0', () => {
    act(() => result.handleInput('0'));

    expect(result.value).toEqual(0);
  });

  it('should output numeric input 1', () => {
    act(() => result.handleInput('1'));

    expect(result.value).toEqual(1);
  });

  it('should output numeric input 2', () => {
    act(() => result.handleInput('2'));

    expect(result.value).toEqual(2);
  });

  it('should output numeric input 3', () => {
    act(() => result.handleInput('3'));

    expect(result.value).toEqual(3);
  });

  it('should output numeric input 4', () => {
    act(() => result.handleInput('4'));

    expect(result.value).toEqual(4);
  });

  it('should output numeric input 5', () => {
    act(() => result.handleInput('5'));

    expect(result.value).toEqual(5);
  });

  it('should output numeric input 6', () => {
    act(() => result.handleInput('6'));

    expect(result.value).toEqual(6);
  });

  it('should output numeric input 7', () => {
    act(() => result.handleInput('7'));

    expect(result.value).toEqual(7);
  });

  it('should output numeric input 8', () => {
    act(() => result.handleInput('8'));

    expect(result.value).toEqual(8);
  });

  it('should output numeric input 9', () => {
    act(() => result.handleInput('9'));

    expect(result.value).toEqual(9);
  });

  it('should add input', () => {
    act(() => result.handleInput('2'));
    act(() => result.handleInput('+'));
    act(() => result.handleInput('2'));
    act(() => result.handleInput('='));

    expect(result.value).toEqual(4);
  });

  it('should multiply input', () => {
    act(() => result.handleInput('2'));
    act(() => result.handleInput('x'));
    act(() => result.handleInput('4'));
    act(() => result.handleInput('='));

    expect(result.value).toEqual(8);
  });

  it('should subtract input', () => {
    act(() => result.handleInput('8'));
    act(() => result.handleInput('-'));
    act(() => result.handleInput('2'));
    act(() => result.handleInput('='));

    expect(result.value).toEqual(6);
  });

  it('should divide input', () => {
    act(() => result.handleInput('1'));
    act(() => result.handleInput('6'));
    act(() => result.handleInput('÷'));
    act(() => result.handleInput('2'));
    act(() => result.handleInput('='));

    expect(result.value).toEqual(8);
  });

  it('should reset display after equals', () => {
    act(() => result.handleInput('1'));
    act(() => result.handleInput('6'));
    act(() => result.handleInput('÷'));
    act(() => result.handleInput('2'));
    act(() => result.handleInput('='));
    act(() => result.handleInput('1'));

    expect(result.value).toEqual(1);
  });

  it('should reset display on clear', () => {
    act(() => result.handleInput('1'));
    act(() => result.handleInput('6'));
    act(() => result.handleInput('clear'));

    expect(result.value).toEqual(0);
  });

  it('unhandled input should return previous state', () => {
    act(() => result.handleInput('4'));
    act(() => result.handleInput('r'));

    expect(result.value).toEqual(4);
  });
});
