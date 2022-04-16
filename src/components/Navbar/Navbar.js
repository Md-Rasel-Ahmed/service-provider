import React from "react";
import N from "./Navbar.module.css";
import logo from "../../img/Logo2.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
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
          <button>Singin</button>
          <button>Singup</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
