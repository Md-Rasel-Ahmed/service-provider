import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import check from "./Checkout.module.css";
const Checkout = () => {
  const navigate = useNavigate();
  const placeOrderBtn = () => {
    navigate("/thankyou");
  };
  return (
    <>
      {" "}
      <h1 style={{ textAlign: "center" }}>Checkout Now</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          // alignItems: "center",
          flexWrap: "wrap",
          padding: "20px 0px",
        }}
      >
        <div className={check.checkoutForm}>
          <div className={check.checkoutWraper}>
            <p>Contact information</p>
            <form action="">
              <input type="text" name="email" placeholder="Email" />
              <div>
                <p>Shiping Adress</p>
                <div style={{ display: "flex", gap: "5px" }}>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <input type="text" placeholder="Company (optional)" />
                <input
                  type="text"
                  name="road"
                  placeholder="Phone no(optional)"
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Flat,suit or floor"
                />
                <input type="text" name="name" placeholder="Business name" />
                <div style={{ display: "flex", gap: "5px" }}>
                  <input type="text" name="city" placeholder="City" />
                  <input
                    type="number"
                    name="postalCode"
                    placeholder="Postal Code"
                  />
                </div>
              </div>
              <div
                style={{ display: "flex", gap: "5px", alignItems: "center" }}
              >
                <Link to="/">
                  <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
                  Return to home page
                </Link>
                <button>Save&Continue</button>
              </div>
            </form>
          </div>
        </div>
        <div className={check.checkoutItems}>
          <h4>Items Name : Depression Therapy</h4>
          <strong>Doctor Name : Doctor Alia</strong>
          <p>
            Depression Treatment in Sydney One of the most common mental health
            issues in Australia; depression can be debilitating, if untreated
            and can greatly impair the everyday life of sufferers.
          </p>
          <h4>Price : $200</h4>
          <button onClick={placeOrderBtn}>Place Order</button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
