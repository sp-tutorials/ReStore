import { Product } from "../../app/models/product.ts";
import ProductList from "./ProductList.tsx";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent.ts";
import LoadingComponent from "../../app/layout/LoadingComponent.tsx";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then(products => setProducts(products))
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [])

  if (loading) return <LoadingComponent message='Loading products...' />

  return (
    <>
      <ProductList products={products} />
    </>
  )
}