export const ACTION_TYPES = {
  GET_PRODUCTS_REQUESTED: "GET_PRODUCTS_REQUESTED",
  GET_PRODUCTS_DONE: "GET_PRODUCTS_DONE",
  GET_PRODUCTS_FAILED: "GET_PRODUCTS_FAILED",
  SET_BRAND: "SET_BRAND",
  SET_INPUT: "SET_INPUT",
  CLEAR_FILTER: "CLEAR_FILTER",
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
};

//products
export const getProductsRequested = () => ({
  type: ACTION_TYPES.GET_PRODUCTS_REQUESTED,
});

export const getProductsDone = (data) => ({
  type: ACTION_TYPES.GET_PRODUCTS_DONE,
  payload: data,
});

export const getProductsFailed = (error) => ({
  type: ACTION_TYPES.GET_PRODUCTS_ERROR,
  payload: error,
});

//search
export const setBrand = (data) => ({
  type: ACTION_TYPES.SET_BRAND,
  payload: data,
});

export const setInput = (data) => ({
  type: ACTION_TYPES.SET_INPUT,
  payload: data,
});

export const clearFilter = () => ({
  type: ACTION_TYPES.CLEAR_FILTER,
});

//cart
export const addToCart = (data) => ({
  type: ACTION_TYPES.ADD_TO_CART,
  payload: data,
});

export const removeFromCart = (data, index) => ({
  type: ACTION_TYPES.REMOVE_FROM_CART,
  payload: data,
  index: index,
});

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch(getProductsRequested());
      const response = await fetch(
        "http://jsdeveloper-shop-api.s3-website-eu-west-1.amazonaws.com"
      );
      const data = await response.json();

      dispatch(getProductsDone(data));
    } catch (error) {
      dispatch(getProductsFailed(error));
    }
  };
};
