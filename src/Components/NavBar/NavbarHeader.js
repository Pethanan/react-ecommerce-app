import React, { useContext } from "react";
import NavbarCartButton from "./NavbarCartButton";
import { Navbar, Nav, Button } from "react-bootstrap";
import classes from "./NavbarHeader.module.css";
import AuthCtx from "../../Store/auth-ctx";
import { NavLink } from "react-router-dom";

const NavbarHeader = (props) => {
  const ctx = useContext(AuthCtx);

  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ width: "100%" }}
      >
        <div className={classes.navlinks} style={{ width: "100%" }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ color: "white" }}>
              <NavLink
                to="/homepage"
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  padding: "5px 20px",
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "50px",
                }}
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  padding: "5px 20px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                Store
              </NavLink>
              <NavLink
                to="/aboutus"
                style={{
                  fontSize: "20px",
                  fontWeight: "bolder",
                  padding: "5px 20px",
                  textDecoration: "none",
                  color: "white",
                }}
              >
                About
              </NavLink>
            </Nav>
            <Nav>
              <NavbarCartButton
                // cartShowHandler={props.cartShowHandler}
                style={{ marginLeft: "500px" }}
              ></NavbarCartButton>
              {ctx.isLoggedIn ? (
                <Button
                  variant="danger"
                  onClick={ctx.logout}
                  style={{ margin: "0 50px", fontWeight: "bold" }}
                >
                  Logout
                </Button>
              ) : (
                <NavLink
                  to="/loginpage"
                  style={{
                    margin: "0 60px",
                    color: "white",
                    textDecoration: "none",
                    fontSize: "20px",
                    fontWeight: "bold",
                    backgroundColor: "green",
                    padding: "5px 10px",
                    borderRadius: "8px",
                  }}
                >
                  Login
                </NavLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default NavbarHeader;
