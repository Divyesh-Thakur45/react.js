import axios from "axios";
import { PRODUCT_Data, PRODUCT_Error, PRODUCT_LOADING } from "../ActionType";
// {
//   params: {
//     _page: page,
//     _limit: 4,
//     _sort: "price",
//     _order: price,
//     category: category,
//     title : search ,
//   },
// }
export const ProductShow = (mainObj)=>(dispatch) => {
  console.log(mainObj)
    dispatch({ type: PRODUCT_LOADING });
    axios
      .get("http://localhost:3000/posts",{
        params: mainObj.param,
      })
      .then((response) => {
        dispatch({ type: PRODUCT_Data, payload: response.data });
        console.log(response.data);
        mainObj.setlimit(response.headers["x-total-count"]);
      })
      .catch((error) => {
        dispatch({ type: PRODUCT_Error });
        console.log(error);
      });
  };