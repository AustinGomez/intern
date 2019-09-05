import {
  reducer as userReducer,
  initialState as userInitialState
} from "./UserState";
import {
  reducer as companyReducer,
  initialState as companyInitialState
} from "./CompanyState";
import { mergeReducers } from "./StateUtils.js";
import { StateProvider } from "./State";
import React from "react";

export const GlobalStateProvider = props => {
  const reducer = mergeReducers({
    userReducer,
    companyReducer
  });

  const initialState = {
    ...userInitialState,
    ...companyInitialState
  };

  return (
    <StateProvider reducer={reducer} initialState={initialState}>
      {props.children}
    </StateProvider>
  );
};
