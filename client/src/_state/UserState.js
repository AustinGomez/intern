import { toast } from "react-toastify";

export const initialState = {
  user: localStorage.getItem("user")
};

export const reducer = (state, action) => {
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
