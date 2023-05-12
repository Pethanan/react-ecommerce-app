import { showCartActions } from "./showCart";
import { cartActions } from "./cart";

export const fetchCartData = (dataEndPoint) => {
  return async (dispatch) => {
    const fetchData = async () => {
      console.log(dataEndPoint);
      const response = await fetch(
        `https://ecommerce---online-shopping-default-rtdb.firebaseio.com/${dataEndPoint}.json`
      );
      console.log(response);
      if (!response.ok) {
        throw new Error("Could not Fetch");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };

    const cartData = await fetchData();
    if (cartData) dispatch(cartActions.retrieveData(cartData));
  };
};
