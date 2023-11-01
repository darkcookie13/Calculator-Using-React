// this component is a simple button that, when clicked, triggers the dispatch of the choose_operator action as the payload.

import { ACTIONS } from "./actions.js";

// OperatorButton is a functional component that renders an operator button
// and dispatches an action when the button is clicked.

export default function OperatorButton({ dispatch, operator }) {
  return (
    // When the button is clicked, it dispatches the CHOOSE_OPERATOR action with the selected operator as payload.
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operator } })
      }
    >
      {operator}
    </button>
  );
}
