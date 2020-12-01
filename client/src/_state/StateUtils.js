export const mergeReducers = reducers => {
  return (state, action) => {
    let newState = state;
    Object.keys(reducers).forEach(key => {
      const reducer = reducers[key];
      newState = { ...newState, ...reducer(newState, action) };
    });

    return newState;
  };
};
