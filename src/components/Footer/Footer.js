import React from "react";
import logo from "../../img/LOGO3.svg";
import { Link } from "react-router-dom";
import F from "./Footer.module.css";
import fbIcon from "../../img/Social icon/download.png";
import { BeakerIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faB, faF } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <div>
      <div style={{ height: "220px", background: "#26ABA3" }}>
        <footer className={F.footer}>
          <div className={F.logo}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className={F.menus}>
            <ul>
              <Link className={F.link} to="/">
                Home
              </Link>
              <Link className={F.link} to="/about">
                About
              </Link>
              <Link className={F.link} to="/blog">
                Blog
              </Link>
              <Link className={F.link} to="/contact">
                Contact
              </Link>
            </ul>
          </div>
          <div className={F.social}>
            <button>
              <img src={fbIcon} alt="" />
            </button>
            <button>a</button>
          </div>
        </footer>
        <p style={{ color: "white", textAlign: "center" }}>
          Copyright &copy; {new Date().getFullYear()} Talking minds | Privacy
          Website Information
        </p>
      </div>
    </div>
  );
};

export default Footer;
