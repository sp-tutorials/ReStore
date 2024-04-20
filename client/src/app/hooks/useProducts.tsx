import { useAppDispatch, useAppSelector } from "../store/configureStore.ts";
import { fetchFilters, fetchProductsAsync, productSelectors } from "../../features/catalog/catalogSlice.ts";
import { useEffect } from "react";

export default function useProducts() {
  const products = useAppSelector(productSelectors.selectAll);
  const {productsLoaded, filtersLoaded, brands, types, metaData} = useAppSelector(state => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch])

  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded]);

  return {
    products,
    productsLoaded,
    filtersLoaded,
    brands,
    types,
    metaData
  };
}