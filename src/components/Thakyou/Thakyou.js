import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Thakyou = () => {
  return (
    <>
      <div align="center" style={{ color: "green", padding: "80px 0px" }}>
        <FontAwesomeIcon
          style={{ fontSize: "30px" }}
          icon={faCheckCircle}
        ></FontAwesomeIcon>
        <h1>Thank you for your purchase</h1>
        <p>You should recevied an order cofirmation email shortly</p>
      </div>
    </>
  );
};

export default Thakyou;
