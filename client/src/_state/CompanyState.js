export const initialState = {
  company: undefined
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_COMPANY":
      return {
        ...state,
        company: action.company
      };
    case "CLEAR_COMPANY":
      return {
        ...state,
        company: null
      };
    default:
      return state;
  }
};
