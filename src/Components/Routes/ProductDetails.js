import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { productsArr } from "../ShoppingMenu/ShoppingItemsList";
import Product from "../ShoppingMenu/Product";

const ProductDetails = () => {
  const params = useParams();
  const id = params.productId;
  const product = productsArr.find((item) => item.id == id);

  return (
    <Container style={{ padding: "80px" }}>
      <Product prod={product}></Product>
    </Container>
  );
};

export default ProductDetails;
