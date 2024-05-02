import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, ProductState } from "../types/Product";

const initialState: ProductState = {
  products: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk("products/fetch", () => {
  return axios.get("/api/products").then((res) => res.data);
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          (state.loading = false),
            (state.products = action.payload),
            (state.error = "");
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        (state.loading = false),
          (state.products = []),
          (state.error = action.error.message || "Something went wrong");
      });
  },
});

export default productSlice.reducer;
// export const { addProducts } = productSlice.actions;
