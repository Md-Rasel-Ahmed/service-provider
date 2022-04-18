import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

import check from "./Checkout.module.css";
const Checkout = ({ clickService }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder={user?.email}
                readOnly
              />
              <div>
                <p>Shiping Adress</p>
                <div style={{ display: "flex", gap: "5px" }}>
                  <input type="text" placeholder="First Name" required />
                  <input type="text" placeholder="Last Name" required />
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
                  required
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Business name(optional)"
                />
                <div style={{ display: "flex", gap: "5px" }}>
                  <input type="text" name="city" placeholder="City" required />
                  <input
                    type="number"
                    name="postalCode"
                    placeholder="Postal Code"
                    required
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
                <button>Save & Place Order</button>
              </div>
            </form>
          </div>
        </div>
        <div className={check.checkoutItems}>
          <h4>Items Name : {clickService.name}</h4>
          <strong>Doctor Name : Dr. Merry Stone</strong>
          <p>{clickService.description}</p>
          <h4>Price : ${clickService.price}</h4>
        </div>
      </div>
    </>
  );
};

export default Checkout;
