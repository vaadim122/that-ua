import React from "react";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "react-oidc-context";

import "../../assets/scss/block/top-banner.scss";
import circle from "../../assets/images/circles.png";
import posters from "../../assets/images/filmsPosters.png";
import posters_mobile from "../../assets/images/poster-mobile.png";
import telegram from "../../assets/images/telIcon.svg";
import arroww_down from "../../assets/images/arrow_down.png";

const TopBaner = () => {
  const auth = useAuth();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 992px)",
  });

  return (
    <div className="welcome-page">
      <div className="welcome-page__content">
        <div className="welcome-page__left">
          <div className="welcome-page__left--img">
            <img
              src={circle}
              className="d-inline-block align-top"
              alt="background"
            />
          </div>
          <div className="welcome-page__left--content">
            <h1>місце збереження ваших улюблених фільмів</h1>
            <div className="welcome-page__left--button">
              <p
                onClick={() => void auth.signinRedirect()}
                className="btn-banner"
              >
                Зареєструватись
              </p>
              <a
                href="https://t.me/that42"
                target="_blank"
                rel="noreferrer"
                className="btn-banner"
              >
                Telegram bot
                <img src={telegram} alt="telegram" width="29" height="29" />
              </a>
              <div className="welcome-page__left--how-use">
                <a href="#short-instruction">
                  Як користуватись{" "}
                  <img src={arroww_down} alt="down" width="27" height="27" />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="welcome-page__left--how-use">
            <a href="#short-instruction">
              Як користуватись{" "}
              <img src={arroww_down} alt="down" width="27" height="27" />
            </a>
          </div> */}
        </div>
        <div className="welcome-page__right">
          {isDesktopOrLaptop ? (
            <img src={posters} alt="posters" />
          ) : (
            <img src={posters_mobile} alt="posters" />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBaner;
