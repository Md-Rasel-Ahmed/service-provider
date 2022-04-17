import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const ResetPass = () => {
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Email Sent");
  };
  return (
    <div style={{ padding: "70px 0px", width: "300px", margin: "auto" }}>
      <h3>Reset your pass</h3>
      <form onSubmit={handleSubmit}>
        <input
          style={{
            padding: "10px",
            display: "block",
            marginBottom: "5px",
            width: "92%",
          }}
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
        <button style={{ padding: "10px", width: "100%" }}>Reset</button>
        <Link to="/login">Login</Link>
      </form>
    </div>
  );
};

export default ResetPass;
