import ProductList from "./ProductList.tsx";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent.tsx";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore.ts";
import { fetchFilters, fetchProductsAsync, productSelectors } from "./catalogSlice.ts";

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const {productsLoaded, status, filtersLoaded} = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch])

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded]);

  if (status.includes('pending')) return <LoadingComponent message='Loading products...' />

  return (
    <>
      <ProductList products={products} />
    </>
  )
}