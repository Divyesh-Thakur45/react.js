export const anitialstate = {
  token: null,
  loding: false,
  isError: false,
};
export const reducer = (state = anitialstate, action) => {
  switch (action.type) {
    case "RequvestToLoding":
      return { ...state, loding: true };
    case "RequvestToToken":
      return { ...state, token: true };
    case "RequvestToError":
      return { ...state, isError: true };
    default:
      return state;
  }
};
