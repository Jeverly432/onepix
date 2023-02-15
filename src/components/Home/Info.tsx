import React from "react";
import "../../styles/info.scss"

const Info: React.FC = () => {
  const Logo: string = require("../../img/home/logo.webp");

  return (
    <article className="info">
      <section className="info__container-logo">
        <img className="info__logo" src={Logo} alt="logo"></img>
      </section>
      <section className="info__scroll">
        <div className="info__scroll__container">
          <p className="info__scroll-text">ЛИСТАЙТЕ ВНИЗ</p>
          <div className="info__scroll-line"></div>
        </div>
      </section>
    </article>
  );
};

export default Info;
