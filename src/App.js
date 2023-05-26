import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import ProductsStore from "./Components/Routes/ProductsStore";
import AuthCtx from "./Store/auth-ctx";
import Cart from "./Components/Cart/Cart";
import Login from "./Components/Routes/Login";
import { showCartActions } from "./Store/showCart";
import Notification from "./Components/UI/Notification";
import { fetchCartData } from "./Store/cart-fetch-action";
import ProductDetails from "../src/Components/Routes/ProductDetails";

const About = lazy(() => import("./Components/Routes/About"));
const Home = lazy(() => import("./Components/Routes/Home"));

const NavbarHeader = lazy(() => import("./Components/NavBar/NavbarHeader"));
let initial = true;

function App() {
  // const [cartShow, setCartShow] = useState(false);

  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.showCart.notification);
  const changed = useSelector((state) => state.cart.changed);
  const showCart = useSelector((state) => state.showCart.showCart);
  const dispatch = useDispatch();
  const authCtx = useContext(AuthCtx);
  const dataEndPoint = authCtx.dataEndPoint;

  useEffect(() => {
    console.log(authCtx.dataEndPoint);
    dispatch(fetchCartData(authCtx.dataEndPoint));
  }, [dispatch]);

  useEffect(() => {
    if (initial) {
      initial = false;
      console.log("empty returing");
      return;
    }

    if (changed) {
      const sendDatatoDB = async () => {
        dispatch(
          showCartActions.showNotification({
            title: "pending",
            status: "Pending",
            message: "sending data to cart...",
          })
        );
        const response = await fetch(
          `https://ecommerce---online-shopping-default-rtdb.firebaseio.com/${authCtx.dataEndPoint}.json`,
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );
        if (!response.ok) {
          throw new Error("Action was not success.. try again");
        }

        dispatch(
          showCartActions.showNotification({
            title: "Success",
            status: "Success",
            message: "sending data to cart was success!",
          })
        );
      };

      sendDatatoDB().catch((err) => {
        if (err) {
          dispatch(
            showCartActions.showNotification({
              title: "Error",
              status: "Error",
              message: "sending data to cart was not success!",
            })
          );
        }
      });
    }
  }, [cart, dispatch]);

  // const cartShowHandler = () => {
  //   setCartShow(true);
  // };
  // const cartCloseHandler = () => {
  //   setCartShow(false);
  // };

  return (
    <>
      <NavbarHeader></NavbarHeader>
      {notification && (
        <Notification notification={notification}></Notification>
      )}
      {showCart && <Cart />}
      <Switch>
        <Route path="/" exact>
          <Suspense fallback={() => <p>...loading...</p>}>
            <Home />
          </Suspense>
        </Route>

        <Route path="/aboutus">
          <Suspense fallback={() => <p>...loading...</p>}>
            <About />
          </Suspense>
        </Route>

        <Route path="/loginpage">
          {!authCtx.isLoggedIn && <Login></Login>}
          {authCtx.isLoggedIn && <Redirect to="/products" />}
        </Route>

        <Route path="/products" exact>
          {authCtx.isLoggedIn && <ProductsStore />}
          {!authCtx.isLoggedIn && <Redirect to="/loginpage" />}
        </Route>
        <Route path="/products/:productId">
          {authCtx.isLoggedIn && <ProductDetails />}
          {!authCtx.isLoggedIn && <Redirect to="/loginpage" />}
        </Route>

        <Route path="/homepage">
          <Suspense fallback={() => <p>...loading...</p>}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
    </>
  );
}

export default App;
