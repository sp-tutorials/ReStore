import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Product, ProductParams } from "../../app/models/product.ts";
import agent from "../../app/api/agent.ts";
import { RootState } from "../../app/store/configureStore.ts";

interface CatalogState {
  productsLoaded: boolean;
  filtersLoaded: boolean;
  status: string;
  brands: string[];
  types: string[];
  productParams: ProductParams;
}

const productsAdapter = createEntityAdapter<Product>();

export const fetchProductsAsync = createAsyncThunk<Product[]>(
  'catalog/fetchProductsAsync',
  async (_, thunkAPI) => {
    try {
      return agent.Catalog.list();
    } catch (e: any) {
      return thunkAPI.rejectWithValue({error: e.data});
    }
  }
)

export const fetchProductAsync = createAsyncThunk<Product, number>(
  'catalog/fetchProductAsync',
  async (productId, thunkAPI) => {
    try {
      return agent.Catalog.details(productId);
    } catch (e: any) {
      return thunkAPI.rejectWithValue({error: e.data})
    }
  }
)

export const fetchFilters = createAsyncThunk(
  'catalog/fetchFilters',
  async (_, thunkAPI) => {
    try {
      return agent.Catalog.fetchFilters();
    } catch (e: any) {
      return thunkAPI.rejectWithValue({error: e.data})
    }
  }
)

function initParams() {
  return {
    pageNumber: 1,
    pageSize: 6,
    orderBy: 'name'
  }
}

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState: productsAdapter.getInitialState<CatalogState>({
    productsLoaded: false,
    filtersLoaded: false,
    status: 'idle',
    brands: [],
    types: [],
    productParams: initParams()
  }),
  reducers: {
    setProductParams: (state, action) => {
      state.productsLoaded = false;
      state.productParams = {...state.productParams, ...action.payload}
    },
    resetProductParams: (state) => {
      state.productParams = initParams();
    }
  },
  extraReducers: (builder => {
    builder.addCase(fetchProductsAsync.pending, (state) => {
      state.status = 'pendingFetchProducts'
    });
    builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
      productsAdapter.setAll(state, action.payload);
      state.status = 'idle';
      state.productsLoaded = true;
    });
    builder.addCase(fetchProductsAsync.rejected, (state, action) => {
      console.log(action);
      state.status = 'idle';
    });
    builder.addCase(fetchProductAsync.pending, (state) => {
      state.status = 'pendingFetchProduct'
    });
    builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
      productsAdapter.upsertOne(state, action.payload);
      state.status = 'idle';
    });
    builder.addCase(fetchProductAsync.rejected, (state, action) => {
      console.log(action);
      state.status = 'idle';
    });
    builder.addCase(fetchFilters.pending, (state) => {
      state.status = 'pendingFetchFilters';
    });
    builder.addCase(fetchFilters.fulfilled, (state, action) => {
      state.brands = action.payload.brands;
      state.types = action.payload.types;
      state.filtersLoaded = true;
      state.status = 'idle';
    });
    builder.addCase(fetchFilters.rejected, (state, action) => {
      console.log(action.payload);
      state.status = 'idle';
    });
  })
})

export const productSelectors = productsAdapter.getSelectors((state: RootState) => state.catalog);

export const {setProductParams, resetProductParams} = catalogSlice.actions;