export const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { countair: state.countair + 1 };
    case "Decrement":
      return { countair: state.countair - 1 };
    default:
      return state;
  }
};
