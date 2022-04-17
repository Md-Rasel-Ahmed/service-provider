import { faG } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Log from "./Login.module.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
      toast.success("Login successful");
    }
    if (error) {
      toast.error(error.message.slice(22, -2));
    }
    gUser && navigate(from, { replace: true });
  }, [user, error, gUser]);
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let pass = e.target.password.value;
    await signInWithEmailAndPassword(email, pass);
  };

  // Reaset pass
  const resetPass = async (e) => {
    navigate("/reset");
  };

  return (
    <div className={Log.loginWraper}>
      <h2>Login Now</h2>

      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button>Login</button>
      </form>
      <button
        style={{
          background: "#4285F4",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
        onClick={async () => {
          await signInWithGoogle();
        }}
      >
        <FontAwesomeIcon icon={faG} />
        Login with google
      </button>
      <a onClick={resetPass} href="#">
        Reset your password?
      </a>
      <br />
      <Link className="btn text-danger  d-block" to="/singup">
        Create an account?
      </Link>
    </div>
  );
};

export default Login;
