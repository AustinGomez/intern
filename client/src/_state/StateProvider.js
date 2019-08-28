import React, { createContext, useContext, useReducer } from "react";
import { userReducer, userInitialstate } from "./UserState";

const StateContext = createContext();

const StateProvider = props => {
  const Provider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );

  return (
    <Provider initialState={initialState} reducer={reducer}>
      {props.children}
    </Provider>
  );
};

export default StateProvider;

export const useStateValue = () => useContext(StateContext);
