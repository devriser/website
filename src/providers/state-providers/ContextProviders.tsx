"use client";

import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { Action, State } from "./appTypes";
import initialState from "./initialState";
import reducer from "./reducer";

type Props = {
  children: ReactNode;
};

const StateContext = createContext<State>(initialState);
const DispatchContext = createContext<Dispatch<Action>>(({}: Action) => {});

export default function ContextProviders({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  );
}

export const useAppState = () => useContext(StateContext);

export const useAppDispatch = () => useContext(DispatchContext);
