import React from "react";
import "../Footer/footer.scss";

const Footer: React.FC = () => {
  return (
    <footer className="footer__container">
      <ul className="footer__list">
        <li className="footer__item-date">2022</li>
        <li className="footer__item-onepix">РАЗРАБОТАНО ONEPIX</li>
        <li className="footer__item-copyright">ВСЕ ПРАВА ЗАЩИЩЕНЫ</li>
      </ul>
      <div className="footer__mobile">
        <ul className="footer__mobile-list">
          <li className="footer__mobile-item__copyright">ВСЕ ПРАВА ЗАЩИЩЕНЫ</li>
          <li className="footer__mobile-item__onepix">РАЗРАБОТАНО ONEPIX</li>
        </ul>
        <div className="footer__mobile-item-date">2022</div>
      </div>
    </footer>
  );
};

export default Footer;
