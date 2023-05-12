import React from "react";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";

const Product = ({ prod }) => {
  return (
    <li
      className="d-flex flex-column justify-content-center"
      style={{ textAlign: "center" }}
    >
      <Link to={`/products/${prod.id}`}>
        <h4 className={classes["item-title"]}>{prod.title} </h4>
      </Link>
      <div className={classes["img-container"]}>
        <img className={classes["item-img"]} src={prod.imageUrl} alt="prod" />
      </div>
      <h4 className={classes["item-amount"]}>${prod.price}</h4>
      <AddToCartButton item={prod}></AddToCartButton>
    </li>
  );
};

export default Product;
