import ProductList from "./ProductList.tsx";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent.tsx";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore.ts";
import { fetchFilters, fetchProductsAsync, productSelectors, setProductParams } from "./catalogSlice.ts";
import {
  Grid, Paper,
} from "@mui/material";
import ProductSearch from "./ProductSearch.tsx";
import RadioButtonGroup from "../../app/components/RadioButtonGroup.tsx";
import CheckboxButtons from "../../app/components/CheckboxButtons.tsx";
import { AppPagination } from "../../app/components/AppPagination.tsx";

const sortOptions = [
  {value: 'name', label: 'Alphabetical'},
  {value: 'priceDesc', label: 'Price - High to low'},
  {value: 'price', label: 'Price - Low to high'},
]

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const {
    productsLoaded,
    status,
    filtersLoaded,
    brands,
    types,
    productParams,
    metaData
  } = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch])

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded]);

  if (status.includes('pending') || !metaData) return <LoadingComponent message='Loading products...' />

  return (
    <Grid container spacing={4}>
      <Grid item xs={3}>
        <Paper sx={{mb: 2}}>
          <ProductSearch />
        </Paper>
        <Paper sx={{mb: 2, p: 2}}>
          <RadioButtonGroup
            selectedValue={productParams.orderBy}
            options={sortOptions}
            onChange={(e) => dispatch(setProductParams({orderBy: e.target.value}))}
          />
        </Paper>

        <Paper sx={{mb: 2, p: 2}}>
          <CheckboxButtons
            items={brands}
            checked={productParams.brands}
            onChange={(items: string[]) => dispatch(setProductParams({brands: items}))}
          />
        </Paper>

        <Paper sx={{mb: 2, p: 2}}>
          <CheckboxButtons
            items={types}
            checked={productParams.types}
            onChange={(items: string[]) => dispatch(setProductParams({types: items}))}
          />
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <ProductList products={products} />
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={9}>
        <AppPagination
          metaData={metaData}
          onPageChange={(page: number) => dispatch(setProductParams({pageNumber: page}))}
        />
      </Grid>
    </Grid>
  )
}