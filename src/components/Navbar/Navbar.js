import React, { useState } from "react";
import N from "./Navbar.module.css";
import logo from "../../img/Logo2.svg";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const singinBtn = () => {
    navigate("/login");
  };
  const singupBtn = () => {
    navigate("/singup");
  };
  const singoutBtn = () => {
    signOut(auth)
      .then(() => {
        toast.success("Singout successful");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  let openmenu = { display: "block", top: "0px" };
  let closemenu = {
    display: "none",
    top: "-100px",
  };
  return (
    <div>
      <nav className={N.nav}>
        <div className={N.logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <div className={N.icon} onClick={() => setOpen(!open)}>
            {open ? (
              <XIcon style={{ width: "40px" }} />
            ) : (
              <MenuIcon style={{ width: "40px" }} />
            )}
          </div>
        </div>

        <div className={N.menus} style={open ? openmenu : closemenu}>
          <ul>
            <Link className={N.link} to="/">
              Home
            </Link>
            <Link className={N.link} to="/about">
              About
            </Link>
            <Link className={N.link} to="/blog">
              Blog
            </Link>
          </ul>
          <div className={N.users}>
            {user?.email ? (
              <button onClick={singoutBtn}>Logout</button>
            ) : (
              <>
                {" "}
                <button onClick={singinBtn}>Singin</button>
                <button onClick={singupBtn}>Singup</button>
              </>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
