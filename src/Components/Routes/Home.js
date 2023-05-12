import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import TourList from "./TourList";

const Home = () => {
  return (
    <React.Fragment>
      <section className={classes["recent-album-section"]}>
        <h1 className={classes.brand}>The generics</h1>
        <Link to="/products">
          <Button
            className={classes["recent-album-bttn"]}
            style={{ fontSize: "22px" }}
          >
            Get our Latest Album
          </Button>
        </Link>
      </section>
      <TourList></TourList>
    </React.Fragment>
  );
};

export default Home;
