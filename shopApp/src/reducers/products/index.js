import { ACTION_TYPES } from "actions";

export default (state = { items: null, FETCH_STATUS: "LOADING" }, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_PRODUCTS_REQUESTED:
      return { ...state, FETCH_STATUS: "LOADING" };

    case ACTION_TYPES.GET_PRODUCTS_DONE:
      return { ...state, FETCH_STATUS: "DONE", items: action.payload };

    case ACTION_TYPES.GET_PRODUCTS_FAILED:
      return { ...state, FETCH_STATUS: "FAILED" };

    default:
      return state;
  }
};
