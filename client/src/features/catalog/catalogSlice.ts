import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../app/models/product.ts";
import agent from "../../app/api/agent.ts";

const productsAdapter = createEntityAdapter<Product>();

export const fetchProductsASync = createAsyncThunk<Product[]>(
  'catalog/fetchProductsAsync',
  async () => {
    try {
      return agent.Catalog.list();
    } catch (e) {
      console.log(e);
    }
  }
)

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: productsAdapter.getInitialState({
    productsLoaded: false,
    status: 'idle'
  }),
  reducers: {},
  extraReducers: (builder => {
    builder.addCase(fetchProductsASync.pending, (state) => {
      state.status = 'pendingFetchProducts'
    });
    builder.addCase(fetchProductsASync.fulfilled, (state, action) => {
      productsAdapter.setAll(state, action.payload);
      state.status = 'idle';
      state.productsLoaded = true;
    });
    builder.addCase(fetchProductsASync.rejected, (state) => {
      state.status = 'idle';
    });
  })
})