import { Action, State } from "./appTypes";

function reducer(state: State, action: Action): State {
  const { type, payload } = action;

  switch (type) {
    case "SET_DROPDOWN":
      return { ...state, dropDown: payload };
    case "SET_HEADERDROPDOWN":
      return { ...state, headerOpen: payload };

    case "ACTIVE_LINK":
      return { ...state, activeLink: payload };

    case "SET_TOGGLE":
      return { ...state, toggle: payload };

    default:
      return state;
  }
}

export default reducer;
