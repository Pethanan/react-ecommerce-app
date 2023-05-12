import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
// import { useContext } from "react";
import CartItem from "./CartItem";
// import CartCtx from "../../Store/cart-ctx";
import { cartActions } from "../../Store/cart";
import { showCartActions } from "../../Store/showCart";

const Cart = (props) => {
  // const cartCtx = useContext(CartCtx);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const cartItems = (
    <>
      {!items && <p>Cart is empty!, please add some items</p>}
      <ul className={classes["cart-items"]}>
        {items &&
          items.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              title={item.title}
              price={item.price}
              amount={item.amount}
              id={item.id}
            />
          ))}
      </ul>
    </>
  );

  const closeCartHandler = () => {
    dispatch(showCartActions.closeCart());
  };

  return (
    <Modal>
      <h1>Cart Items</h1>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeCartHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
