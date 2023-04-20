import React from "react";
import { useAuth } from "react-oidc-context";

import "../../assets/scss/block/short-instruction.scss";
import screen from "../../assets/images/screen.png";
import slider from "../../assets/images/slider.png";
import telegram from "../../assets/images/telIcon.svg";
import circle_title from "../../assets/images/circl2.png";
import circle_screen from "../../assets/images/circl1.png";

const ShortInstruction = () => {
  const auth = useAuth();

  return (
    <div className="short-instruction" id="short-instruction">
      <div className="short-instruction__content">
        <div className="short-instruction__bg-img">
          <img src={circle_title} alt="posters" />
        </div>
        <div className="short-instruction__title">
          <h2>Коротка інструкція як користуватись сервісом</h2>
        </div>
        <div className="short-instruction__left">
          <img src={slider} alt="posters" />
        </div>
        <div className="short-instruction__right">
          <div className="short-instruction__bg-img-two">
            <img src={circle_screen} alt="posters" />
          </div>
          <img
            src={screen}
            alt="posters"
            className="short-instruction__right__img"
          />
          <div className="short-instruction__right--button">
            <p onClick={() => void auth.signinRedirect()}>Зареєструватись</p>
            <a href="https://t.me/that42" target="_blank" rel="noreferrer">
              Telegram bot
              <img src={telegram} alt="telegram" width="29" height="29" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortInstruction;
