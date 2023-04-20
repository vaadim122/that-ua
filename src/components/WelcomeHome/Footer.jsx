import React from "react";

import "../../assets/scss/block/footer.scss";
import instagram from "../../assets/images/instaY.svg";
import facebook from "../../assets/images/fbY.svg";
import twitter from "../../assets/images/twitY.svg";
import telegram from "../../assets/images/telY.svg";
import subscription from "../../assets/images/subsY.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h3>Слідкуйте за нашими оновленнями</h3>
          <p>Copywriting 2023</p>
        </div>
        <div className="footer__right">
          <div className="footer__right__form">
            <input type="text" placeholder="@email.com" />
            <button>
              Підписатись{" "}
              <img src={subscription} alt="subscription" width="28" />
            </button>
          </div>
          <div className="footer__right__social-icon">
            <a href="#" target="_blank" rel="noreferrer">
              <img src={instagram} alt="instagram-link" width="27" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={facebook} alt="facebook-link" width="28" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={twitter} alt="twitter-link" width="28" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram-link" width="27" />
            </a>
          </div>
          <p>Copywriting 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
