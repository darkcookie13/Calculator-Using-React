// This code defines a set constants tht represents different actions or event that can take place in the calculator.

// Define a set of action types as constants
export const ACTIONS = {
  // Add a digit to the current operand
  ADD_DIGIT: "add-digit",

  // Choose an operator for the calculation
  CHOOSE_OPERATOR: "choose-operator",

  // Clear the calculator, resetting all values
  CLEAR: "clear",

  // Delete the last digit from the current operand
  DELETE_DIGIT: "delete-digit",

  // Evaluate the current expression and calculate the result
  EVALUATE: "evaluate"
};
