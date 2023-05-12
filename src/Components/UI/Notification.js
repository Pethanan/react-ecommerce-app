import React from "react";
import { Fragment } from "react";
import "./Notification.css";

const Notification = ({ notification }) => {
  let conditionalClass;
  if (notification.status === "Pending") {
    conditionalClass = "notificationPending";
  }

  if (notification.status === "Success") {
    conditionalClass = "notificationSuccess";
  }
  if (notification.status === "Error") {
    conditionalClass = "notificationError";
  }

  return (
    <Fragment>
      <div className={conditionalClass}>
        <h4>{notification.status}</h4>
        <h4>{notification.message}</h4>
      </div>
    </Fragment>
  );
};

export default Notification;
