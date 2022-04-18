import React from "react";
import Home from "../Home/Home";
import OnlineForm from "../OnlineForm/OnlineForm";
import Service from "../Service/Service";

const Allpages = ({ buyBtn }) => {
  return (
    <div>
      <Home></Home>
      <Service buyBtn={buyBtn}></Service>
      <OnlineForm></OnlineForm>
    </div>
  );
};

export default Allpages;
