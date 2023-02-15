import React from "react";
import "../../styles/catalog.scss";

const Catalog: React.FC = () => {
  return (
    <article className="catalog">
      <section className="catalog__wrapper">
        <ul className="catalog__list">
          <li className="catalog__item-main">ГЛАВНАЯ</li>
          <li className="catalog__item">КАТАЛОГ</li>
          <li className="catalog__item">ПРОЕКТЫ</li>
          <li className="catalog__item">КОНТАКТЫ</li>
          <li className="catalog__item">FAQ</li>
        </ul>
      </section>
    </article>
  );
};

export default Catalog;
