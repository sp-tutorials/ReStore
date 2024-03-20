import { useEffect, useState } from "react";
import { Product } from "../models/product.ts";
import Catalog from "../../features/catalog/Catalog.tsx";
import Header from "./Header.tsx";
import { Container, CssBaseline } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  function addProduct() {
    setProducts(prevState => [...prevState,
      {
        id: prevState.length + 1,
        name: 'product' + (prevState.length + 1),
        price: (prevState.length * 100) + 100,
        brand: 'some brand',
        description: 'description',
        pictureUrl: 'http://picsum.photos/200',
      }])
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <Container>
        <Catalog products={products} addProduct={addProduct} />
      </Container>
    </>
  );
}

export default App
