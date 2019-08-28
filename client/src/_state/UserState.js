import React, { createContext, useContext, useReducer } from "react";
import { toast } from "react-toastify";

const UserContext = createContext(undefined);

const initialState = {
  user: localStorage.getItem("user")
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      localStorage.setItem("user", action.user);
      toast("Logged In", {
        className: "has-text-success"
      });
      return {
        ...state,
        user: action.user
      };
    case "CLEAR_USER":
      localStorage.removeItem("user");
      toast("Logged Out", {
        className: "has-text-success"
      });
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

const Provider = ({ reducer, initialState, children }) => (
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);

export const UserProvider = props => {
  return (
    <Provider initialState={initialState} reducer={reducer}>
      {props.children}
    </Provider>
  );
};

export const useUserStateValue = () => useContext(UserContext);
