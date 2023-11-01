// this component represents a button for enteringdigits in the calculator app. When click the button, it dispatches the add_digit acion with the selected digit as the payload.

import { ACTIONS } from "./actions.js";

// DigitButton is a functional component that renders a digit button and
// dispatches an action when the button is clicked.

export default function DigitButton({ dispatch, digit }) {
  return (
    // When the button is clicked, it dispatches the ADD_DIGIT action with the selected digit as payload.
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
