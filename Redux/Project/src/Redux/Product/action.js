export const ProductShow = (dispatch) => {
  console.log(dispatch)
    dispatch({ type: "PRODUCT_LOADING" });
    axios
      .get("http://localhost:3000/posts", {
        params: {
          _page: page,
          _limit: 4,
          _sort: "price",
          _order: price,
          category: category,
          title : search ,
        },
      })
      .then((response) => {
        dispatch({ type: "PRODUCT_Data", payload: response.data });
        console.log(response.data);
      })
      .catch((error) => {
        dispatch({ type: "PRODUCT_Error" });
        console.log(error);
      });
  };