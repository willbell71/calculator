import * as React from 'react';

/**
 * Reducer state.
 * @property {string | undefined} operation - current operation being performed, ie + etc.
 * @property {number} previousValue - previously entered value, ie value before selecting operation.
 * @property {number} currentValue - currently being entered value.
 */
type TReducerState = {
  operation: string | undefined;
  previousValue: number;
  currentValue: number;
};

export function useCalculator(): {value: number, handleInput: React.Dispatch<string>} {
  const applyOperation: (operation: string | undefined, previousValue: number, currentValue: number) => number =
    (operation: string | undefined, previousValue: number, currentValue: number): number => {
      switch (operation) {
        case '÷': return previousValue / currentValue;
        case '-': return previousValue - currentValue;
        case '+': return previousValue + currentValue;
        case 'x': return previousValue * currentValue;
        default: return currentValue;
      }
    };
    
  const reducer: (state: TReducerState, action: string) => TReducerState = (state: TReducerState, action: string): TReducerState => { 
    switch (action) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if ('=' === state.operation) {
          return {
            ...state,
            operation: undefined,
            currentValue: parseInt(action, 10)
          };
        }
  
        return {
          ...state,
          currentValue: (state.currentValue * 10) + parseInt(action, 10)
        };
      case 'clear':
        return {
          currentValue: 0,
          previousValue: 0,
          operation: undefined
        };
      case '÷':
      case '-':
      case '+':
      case 'x':
        return {
          ...state,
          previousValue: applyOperation(state.operation, state.previousValue, state.currentValue),
          currentValue: 0,
          operation: action
        };
      case '=':
        return {
          ...state,
          currentValue: applyOperation(state.operation, state.previousValue, state.currentValue),
          previousValue: 0,
          operation: action
        };
      default: return state;
    }
  };

  const initialState: TReducerState = {
    operation: undefined,
    previousValue: 0,
    currentValue: 0
  };  
  const [state, handleInput]: [TReducerState, React.Dispatch<string>] = React.useReducer(reducer, initialState);
  return {value: state.currentValue, handleInput};
}
