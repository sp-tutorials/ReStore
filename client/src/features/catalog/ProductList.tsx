import { List } from "@mui/material";
import { Product } from "../../app/models/product.ts";
import ProductCard from "./ProductCard.tsx";

interface Props {
  products: Product[];
}

export default function ProductList({products}: Props) {
  return (
    <List>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  )
}