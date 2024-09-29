const intialstate = {
  data: [],
  loading: false,
  isError: false,
};

export const reducer = (state = intialstate, action) => {
  switch (action.type) {
    case "PRODUCT_LOADING":
      return { data: false, isError: false, loading: true };
    case "PRODUCT_Data":
      return { isError: false, loading: false, data: action.payload };
    case "PRODUCT_Error":
      return { loading: false, data: false, isError: true };
    default:
      return state;
  }
};
