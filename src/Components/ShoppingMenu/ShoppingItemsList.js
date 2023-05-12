import React from "react";
import AddToCartButton from "./AddToCartButton";
import classes from "./ShoppingItemsList.module.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "./Product";

export const productsArr = [
  {
    id: 1,
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: 2,
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: 3,
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: 4,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 5,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 6,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 7,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 8,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id: 9,
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ShoppingItemsList = (props) => {
  const items = productsArr.map((prod) => (
    <Product key={prod.id} prod={prod}></Product>
  ));

  return (
    <div className={classes.container}>
      <h1 className={classes["brand-title"]}>THE GENERICS</h1>
      <div className={classes.title}>
        <h3 className={classes["list-title"]}>Shopping Items</h3>
      </div>
      <ul className={classes["grid-list"]}>{items}</ul>
    </div>
  );
};

export default ShoppingItemsList;
