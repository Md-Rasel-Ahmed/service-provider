import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Log from "./Login.module.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, ResetError] =
    useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    let from = location.state?.from?.pathname || "/";
    if (user) {
      navigate(from, { replace: true });
      toast.success("Login successful");
    }
    if (error) {
      toast.error(error.message.slice(22, -2));
    }
  }, [user, error]);
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
    await sendPasswordResetEmail(email);
    sending && toast.success("Sent email");
    ResetError && toast.error(ResetError.message.slice(22, -2));
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
