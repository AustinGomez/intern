import {
  reducer as userReducer,
  initialState as userInitialState
} from "./UserState";
import { mergeReducers } from "./StateUtils.js";
import { StateProvider } from "./State";
import React from "react";

export const GlobalStateProvider = props => {
  const reducer = mergeReducers({
    userReducer
  });

  const initialState = {
    ...userInitialState
  };

  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      {props.children}
    </StateProvider>
  );
};
