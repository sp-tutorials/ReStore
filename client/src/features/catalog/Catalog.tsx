import { Product } from "../../app/models/product.ts";
import { Button } from "@mui/material";
import ProductList from "./ProductList.tsx";

interface Props {
  products: Product[];
  addProduct: () => void;
}

export default function Catalog({products, addProduct}: Props) {
  return (
    <>
      <ProductList products={products} />
      <Button variant='contained' onClick={addProduct}>Add product</Button>
    </>
  )
}