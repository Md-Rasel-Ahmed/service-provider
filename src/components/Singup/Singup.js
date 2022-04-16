import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Sin from "./Singup.module.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Singup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updatEerror] = useUpdateProfile(auth);

  const [passError, setPassError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let pass = e.target.password.value;
    let confirmPass = e.target.confirmPssword.value;
    if (pass === confirmPass) {
      await createUserWithEmailAndPassword(email, pass);
      await updateProfile({ displayName: name });
      toast.success("Singup successful");
    } else {
      setPassError("Confirm Password din,t match");
    }
    if (user) {
      navigate("/login");
    }
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
        <small className="text-danger">{passError}</small>
        <input
          required
          type="password"
          name="confirmPssword"
          placeholder="Confirm Password"
        />
        <button>Singup</button>
        <Link to="/login">Already have an account?</Link>
      </form>
    </div>
  );
};

export default Singup;
