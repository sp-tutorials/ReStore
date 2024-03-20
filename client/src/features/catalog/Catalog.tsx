import { Product } from "../../app/models/product.ts";
import ProductList from "./ProductList.tsx";
import { useEffect, useState } from "react";

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <ProductList products={products} />
    </>
  )
}