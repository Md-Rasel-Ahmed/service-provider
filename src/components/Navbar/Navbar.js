import React from "react";
import N from "./Navbar.module.css";
import logo from "../../img/Logo2.svg";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const singinBtn = () => {
    navigate("/login");
  };
  const singupBtn = () => {
    navigate("/singup");
  };
  return (
    <div>
      <nav className={N.nav}>
        <div className={N.logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={N.menus}>
          <ul>
            <Link className={N.link} to="/">
              Home
            </Link>
            <Link className={N.link} to="/about">
              About
            </Link>
          </ul>
        </div>
        <div className={N.users}>
          <button onClick={singinBtn}>Singin</button>
          <button onClick={singupBtn}>Singup</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
