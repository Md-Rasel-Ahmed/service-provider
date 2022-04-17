import React from "react";
import contact from "./OnlineForm.module.css";
const OnlineForm = () => {
  return (
    <div>
      <h1 className={contact.h1}>Get your first free online consultation</h1>
      <form className={contact.form}>
        <div>
          <input type="text" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" />
        </div>
        <div>
          <select className={contact.select}>
            <option value="Family Therapy">Family Therapy</option>
            <option value="Family Therapy">Individual Therapy</option>
            <option value="Family Therapy">Other Therapy</option>
          </select>
          <input type="date" name="date" id="" placeholder="Date" />
        </div>
        <div>
          <input type="number" name="number" placeholder="Phone Number" />
          <select className={contact.select} name="" id="">
            <option value="Family Therapy">D.Alia</option>
            <option value="Family Therapy">D.Smith</option>
            <option value="Family Therapy">D.Sarif</option>
          </select>
        </div>
        <div>
          <textarea
            name="textarea"
            id=""
            cols="50"
            rows="10"
            placeholder="Your message"
          ></textarea>
        </div>
        <button>Send your request</button>
      </form>
    </div>
  );
};

export default OnlineForm;
