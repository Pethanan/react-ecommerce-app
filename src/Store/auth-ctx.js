import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "./cart";
import CartCtx from "./cart-ctx";

const AuthCtx = React.createContext({
  userMail: "",
  isLoggedIn: false,
  dataEndPoint: "",
  token: "",
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const dispatch = useDispatch();

  const initialToken = localStorage.getItem("token");
  const initialUserEmail = localStorage.getItem("userMail");
  const initialDataEndPoint = localStorage.getItem("dataEndPoint");

  const [mail, setMail] = useState(initialUserEmail);
  const [userCartEndPoint, setUserCartEndPoint] = useState(initialDataEndPoint);
  const [token, setToken] = useState(initialToken);
  const isUserLoggedIn = !!token;

  const loginHandler = (token, mail) => {
    setToken(token);
    setMail(mail);
    const endPoint = mail.replace("@", "").replace(".", "");
    setUserCartEndPoint(endPoint);
    localStorage.setItem("token", token);
    localStorage.setItem("userMail", mail);
    console.log(localStorage.getItem("userMail"));
    console.log(endPoint);
    localStorage.setItem("dataEndPoint", endPoint);

    // setTimeout(() => {
    //   localStorage.removeItem("token");
    //   setToken(null);
    //   setMail(null);
    //   setUserCartEndPoint(null);

    //   localStorage.removeItem("userMail");
    // }, 60000000);
    // // 60000/60 = 1000 min / 60 = 100/6 = 16
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userMail");
    localStorage.removeItem("dataEndPoint");
    setToken(null);
    setMail(null);
    setUserCartEndPoint(null);
    <Redirect to="/loginpage"></Redirect>;
  };

  const contextValue = {
    isLoggedIn: isUserLoggedIn,
    userMail: mail,
    token: localStorage.getItem("token"),
    dataEndPoint: localStorage.getItem("dataEndPoint"),
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthCtx.Provider value={contextValue}>{props.children}</AuthCtx.Provider>
  );
};

export default AuthCtx;
