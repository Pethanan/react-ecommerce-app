import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
// import { useContext } from "react";
import CartItem from "./CartItem";
// import CartCtx from "../../Store/cart-ctx";
import { cartActions } from "../../Store/cart";
import { showCartActions } from "../../Store/showCart";
import AuthCtx from "../../Store/auth-ctx";

const Cart = (props) => {
  const authCtx = useContext(AuthCtx);
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
    <>
      {!authCtx.isLoggedIn && (
        <Modal>
          <p>Please login to Continue</p>
          <button className={classes["button--alt"]} onClick={closeCartHandler}>
            Close
          </button>
        </Modal>
      )}
      {authCtx.isLoggedIn && (
        <Modal>
          <h1>Cart Items</h1>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>$ {totalAmount}</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["button--alt"]}
              onClick={closeCartHandler}
            >
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
