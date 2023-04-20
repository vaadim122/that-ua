import React, { useState, useEffect } from "react";

import Recomendation from "./Recomendation";
import like_r from "../../assets/images/like-white.png";

const RateBtn = ({ lists, filmsRate }) => {
  const [recomendation, setRecomendation] = useState(false);
  const [showPopupHelp, setShowPopupHelp] = useState(false);
  const [delay, setDelay] = useState(false);

  const openHelp = localStorage.getItem("openHelp") ? false : true;

  useEffect(() => {
    const timeout = setTimeout(() => setDelay((prev) => true), 1100);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const listsLn = lists.filter((list) => list.type === "Content").length;

    const norate = filmsRate.filter((item) => item === 0).length;

    console.log((100 * norate) / filmsRate.length);

    if (
      ((100 * norate) / filmsRate.length > 70 && listsLn < 3) ||
      filmsRate.length < 1
    ) {
      setShowPopupHelp(true);
      // console.log(filmsRate.length);
      console.log((100 * norate) / filmsRate.length);
    } else {
      setShowPopupHelp(false);
    }
  }, [filmsRate, lists]);

  const showRecomendation = () => {
    setRecomendation(true);
    setShowPopupHelp(false);
    localStorage.setItem("openHelp", false);
  };

  const handleToggle = () => {
    setShowPopupHelp(false);
    localStorage.setItem("openHelp", false);
  };

  //   console.log(filmsRate);

  return (
    <div className="recomendation-btn">
      <button
        className={`button ${
          showPopupHelp && openHelp ? "help-popup-open" : ""
        }`}
        onClick={showRecomendation}
      >
        Recommendation
        <img src={like_r} alt="recommendation" />
      </button>

      {delay && (
        <>
          {showPopupHelp && openHelp ? (
            <div className="recomendation__help-popup">
              <div className="recomendation__help-popup-content">
                <div className="recomendation__help-popup__close">
                  <span onClick={handleToggle}></span>
                </div>
                Please rate a few movies, it will help us to choose
                recommendations for you more accurately in the future.
              </div>
            </div>
          ) : (
            ""
          )}
        </>
      )}
      {recomendation && <Recomendation setRecomendation={setRecomendation} />}
    </div>
  );
};
export default RateBtn;
