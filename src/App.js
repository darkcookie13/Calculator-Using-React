// This code creates a React calculator with a functional interface. It uses useReducer hook for state  management and dispatchs actions to update the calculator's state. 

// Import necessary dependencies and components
import React from 'react';
import { useReducer } from 'react';
import { reducer } from './reducer.js'; // Import the reducer function
import { ACTIONS } from "./actions.js"; // Import action types
import OperatorButton from './OperatorButton'; // Import the OperatorButton component
import DigitButton from './DigitButton'; // Import the DigitButton component
import './App.css';

function App() {
  // Initialize the state using the useReducer hook and the reducer function
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {});

  // Format the operator for display
  const formateOperator = (operand) => {
    if (operand == null) {
      return;
    }
    const [integer, decimal] = operand.split('.');
    if (decimal == null) return INTEGER_CREATED.format(integer);
    return `${INTEGER_CREATED.format(integer)}.${decimal}`;
  };

  // Create a number format object for formatting integers
  const INTEGER_CREATED = new Intl.NumberFormat('en-us', {
    maximumFractionDigits: 0,
  });

  return (
    <div className="calculator-grid">
      <div className="output">
        {/* Display the previous operand and the current operation */}
        <div className="previous-operand">{formateOperator(previousOperand)} {operation}</div>
        {/* Display the current operand */}
        <div className="current-operand">{formateOperator(currentOperand)}</div>
      </div>

      {/* Buttons for clearing the calculator */}
      <button className="span-two" onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
      <button onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}>DEL</button>

 {/* Operator buttons for division, multiplication, addition, and subtraction */}
      {/* Digit buttons for numbers and the decimal point */}
      <OperatorButton operator="÷" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperatorButton operator="-" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperatorButton operator="*" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperatorButton operator="+" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      

      {/* Button for evaluating the expression */}
      <button className="span-two" onClick={() => dispatch({ type: ACTIONS.EVALUATE })}>=</button>
    </div>
  );
}

export default App;
