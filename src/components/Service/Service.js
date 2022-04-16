import React from "react";
import S from "./Services.module.css";
import servic1 from "../../img/Services/service_5.svg";
import servic2 from "../../img/Services/Group.svg";
const Service = () => {
  return (
    <div className={S.wraper}>
      <h1>What I offer</h1>

      <div className={S.container}>
        <div className={S.card}>
          <div className={S.cardPrice}>
            <strong>$200</strong>
          </div>
          <div className={S.cardImg}>
            <img src={servic1} alt="" />
          </div>
          <div className={S.cardText}>
            <h2>Depression Therapy</h2>
          </div>
          <div className={S.cardBody}>
            <p>
              Depression Treatment in Sydney One of the most common mental
              health issues in Australia; depression can be debilitating, if
              untreated and can greatly impair the everyday life of sufferers.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <button>Buy</button>
          </div>
        </div>
        <div className={S.card}>
          <div className={S.cardPrice}>
            <strong>$250</strong>
          </div>
          <div className={S.cardImg}>
            <img style={{ width: "150px" }} src={servic2} alt="" />
          </div>
          <div className={S.cardText}>
            <h2>Couples Counseling</h2>
          </div>
          <div className={S.cardBody}>
            <p>
              Therapy On Your Schedule. Text, Phone & Online Therapy With a
              Licensed Therapist. Meet With a Licensed Therapist Via Phone, Chat
              or Video. Specialized In Couples Issues. Licensed Counselor. Start
              Therapy. Flexible Text Options. Mental Health Support.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <button>Buy</button>
          </div>
        </div>
        <div className={S.card}>
          <div className={S.cardPrice}>
            <strong>$300</strong>
          </div>
          <div className={S.cardImg}>
            <img src={servic1} alt="" />
          </div>
          <div className={S.cardText}>
            <h2>Depression Therapy</h2>
          </div>
          <div className={S.cardBody}>
            <p>
              Depression Treatment in Sydney One of the most common mental
              health issues in Australia; depression can be debilitating, if
              untreated and can greatly impair the everyday life of sufferers.
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <button>Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
