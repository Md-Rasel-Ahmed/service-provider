import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Sin from "./Singup.module.css";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faG } from "@fortawesome/free-solid-svg-icons";

const Singup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const [updateProfile, updating, updatEerror] = useUpdateProfile(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);

  const [passError, setPassError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      toast.success("Singup successful");
    }
    if (error) {
      toast.error(error.message.slice(22, -2));
    }
    if (user) {
      navigate("/");
    }
  }, [user, error]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let pass = e.target.password.value;
    let confirmPass = e.target.confirmPssword.value;
    if (pass === confirmPass) {
      await createUserWithEmailAndPassword(email, pass);
      await updateProfile({ displayName: name });
      await sendEmailVerification();
    } else {
      setPassError("Confirm Password din,t match");
    }
  };
  // goole login
  const googleLogin = () => {
    signInWithGoogle();
  };

  return (
    <div className={Sin.singupWraper}>
      <h2>Singup Now</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <small style={{ color: "red" }}>{passError}</small>
        <input
          required
          type="password"
          name="confirmPssword"
          placeholder="Confirm Password"
        />
        <button>Singup</button>
      </form>
      <button
        style={{
          background: "#4285F4",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
        onClick={googleLogin}
      >
        <FontAwesomeIcon icon={faG} />
        Singup with google
      </button>
      <Link to="/login">Already have an account?</Link>
    </div>
  );
};

export default Singup;
