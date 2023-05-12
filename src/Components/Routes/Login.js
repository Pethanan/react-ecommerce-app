import React, { useContext } from "react";
import { useRef } from "react";
import { Container, Form } from "react-bootstrap";
import AuthCtx from "../../Store/auth-ctx";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { cartActions } from "../../Store/cart";
import { useDispatch } from "react-redux";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const ctx = useContext(AuthCtx);
  const dispatch = useDispatch();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    emailRef.current.value = "";
    passwordRef.current.value = "";
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB0gvu4DcaKZpcr5ICbUE_wucAVfXNp96s",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.error?.message) {
      console.log(data.error.message);
    } else {
      const token = data.idToken;
      ctx.login(token, enteredEmail);
      try {
        const responseData = await fetch(
          `https://ecommerce---online-shopping-default-rtdb.firebaseio.com/${enteredEmail
            .replace("@", "")
            .replace(".", "")}.json`
        );

        const cartData = await responseData.json();
        console.log(cartData);
        if (cartData) dispatch(cartActions.retrieveData(cartData));
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <h2 style={{ textAlign: "center", margin: "60px", color: "#30827d" }}>
        Welcome Back !
      </h2>

      <Container style={{ width: "600px" }}>
        <Form onSubmit={loginSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>
              Email ID/User ID
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={emailRef}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </Form.Group>

          <Button
            variant="success"
            type="submit"
            style={{ fontWeight: "bold" }}
          >
            Submit
          </Button>
        </Form>
      </Container>

      {ctx.isLoggedIn && <Redirect to="/Products" />}
    </>
  );
};

export default Login;
