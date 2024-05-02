import { ProductAction, ProductState } from "../types/Product";

export const Product_InitialState: ProductState = {
  products: [],
  loading: false,
  error: "",
};

export const Product_Reducer = (state: ProductState, action: ProductAction) => {
  switch (action.type) {
    case "REQUEST":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false, products: action.payload };
    case "FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
