import { createSlice } from "@reduxjs/toolkit";
import productData from "../../data/items.json";

const initialState = {
  products: productData,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {},
  reducers: {},
});

export default productSlice.reducer;
