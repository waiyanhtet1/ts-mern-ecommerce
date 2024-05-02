import axios from "axios";
import React, { useEffect, useReducer } from "react";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import ProductCard from "../components/ProductCard";
import {
  Product_InitialState,
  Product_Reducer,
} from "../reducers/productReducer";
import { APIError } from "../types/APIError";
import { ProductAction, ProductState } from "../types/Product";
import { getError } from "../utils/getError";

const HomePage = () => {
  const [{ products, loading, error }, dispatch] = useReducer<
    React.Reducer<ProductState, ProductAction>
  >(Product_Reducer, Product_InitialState);

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch({ type: "REQUEST" });
      try {
        const result = await axios.get("/api/products");
        dispatch({ type: "SUCCESS", payload: result.data });
      } catch (error) {
        dispatch({ type: "FAIL", payload: getError(error as APIError) });
      }
    };

    fetchProduct();
  }, []);

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <MessageBox variant="error" text={error} />
  ) : (
    <div className="flex items-center flex-wrap gap-5 justify-center">
      {products.slice(0, 4).map((data, i) => (
        <ProductCard key={i} data={data} />
      ))}
    </div>
  );
};

export default HomePage;
