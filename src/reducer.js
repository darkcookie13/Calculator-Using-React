// the code is structured in a way that allows for handling various calculator such as operations like add,substract,multiply,divide, clearing the display and performing calculations. It maintains the state of calculator and updates it based on user input.

import { ACTIONS } from "./actions.js";

export function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        // If overwrite is true, replace the current operand with the new digit
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        };
      }
      if (payload.digit === "0" && state.currentOperand === "0") {
        // Prevent leading zeros
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) {
        // Prevent multiple decimal points
        return state;
      }
      // Append the digit to the current operand
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      };

    case ACTIONS.CHOOSE_OPERATOR:
      if (state.currentOperand == null && state.previousOperand == null) {
        // No operation if both operands are null
        return state;
      }
      if (state.currentOperand == null) {
        // Choose the operator if the current operand is null
        return {
          ...state,
          operation: payload.operator
        };
      }
      if (state.previousOperand == null) {
        // Set the previous operand and choose the operator
        return {
          ...state,
          operation: payload.operator,
          previousOperand: state.currentOperand,
          currentOperand: null
        };
      }
      // Evaluate the previous expression and set the new operator
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operator,
        currentOperand: null
      };

    case ACTIONS.CLEAR:
      // Reset the state by returning an empty object
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        // If overwrite is true, clear the current operand
        return {
          ...state,
          currentOperand: null,
          overwrite: false
        };
      }
      if (state.currentOperand == null) {
        // No action if the current operand is null
        return state;
      }
      if (state.currentOperand === 1) {
        // Clear the current operand if it's 1
        return {
          ...state,
          currentOperand: null
        };
      }
      // Delete the last digit from the current operand
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      };

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ) {
        // No action if the conditions for evaluation are not met
        return state;
      }
      // Evaluate the expression, reset state, and set overwrite to true
      return {
        ...state,
        previousOperand: null,
        currentOperand: evaluate(state),
        operation: null,
        overwrite: true
      };
  }
}

// Helper function to evaluate expressions
function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) {
    // Check for NaN values and return an empty string
    return "";
  }
  let computation = "";
  // Perform the calculation based on the chosen operator
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }
  // Convert the result to a string and return it
  return computation.toString();
}
