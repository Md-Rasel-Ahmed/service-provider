import React from "react";
import H from "./Home.module.css";
import DoctorImg from "../../img/man-with-psychologist-in-the-office-62XB78R1.jpg";
const Home = () => {
  return (
    <div className={H.container}>
      <div className={H.homeText}>
        <h1>
          <span>Dr. Merry Stone </span>— Licensed Mental Health Counselor,
          Psychotherapist
        </h1>
        <p>
          For over 15 years, Talkingminds have been a respected provider of
          psychology and clinical psychology, counselling, psychotherapeutic,
          training and life coaching services in Sydney. Operating in the inner
          west/CBD fringe suburb of Ultimo, Sydney and in a secondary locations
          in Camden (south west Sydney/Macarthur region) and Stanmore our
          practice has provided easy access to high quality, affordable services
        </p>
        <button>Learn more..</button>
      </div>
      <div className={H.homeImg}>
        <img src={DoctorImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
