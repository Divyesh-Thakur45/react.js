const intialstate = {
  data: [],
  loading: false,
  isError: false,
};

export const reducer = (state = intialstate, action) => {
  switch (action.type) {
    case "PRODUCT_LOADING":
      return { ...state, loading: true };
    case "PRODUCT_Data":
      return { ...state, data: action.payload };
    case "PRODUCT_Error":
      return { ...state, isError: true };
    default:
      return state;
  }
};
