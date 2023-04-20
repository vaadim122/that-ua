import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import instagram from "../../assets/images/inst.png";
import telegram from "../../assets/images/telegram1.png";
import LinkingCode from "../LinkingCode/LinkingCode";

const AutthorityImUser = () => {
  const [isActive, setActive] = useState(false);
  const [namePopup, setNamePopup] = useState("");

  const about_me = useSelector(({ profileReducer }) => profileReducer);
  const ref = useRef(null);

  const handleToggle = (e) => {
    setActive(!isActive);
    switch (e.target.dataset.id) {
      case "instagram_popup":
        setNamePopup("instagram");
        break;
      case "telegram_popup":
        setNamePopup("telegram");
        break;
      default:
        alert("");
    }
  };

  const useOutsideClick = (ref, callback) => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  useOutsideClick(ref, () => {
    setActive(false);
  });

  return (
    <div className="header-insta-link" ref={ref}>
      {!about_me?.isInstagramLinked && (
        <div
          className="header-insta-link__icon--instagram"
          onClick={handleToggle}
        >
          <img
            src={instagram}
            width="25"
            height="25"
            className="d-inline-block align-top"
            alt="instagram"
            data-id="instagram_popup"
          />
        </div>
      )}
      {!about_me?.isTelegramLinked && (
        <div
          className="header-insta-link__icon--telegram"
          onClick={handleToggle}
        >
          <img
            src={telegram}
            width="25"
            height="25"
            className="d-inline-block align-top"
            alt="telegram"
            data-id="telegram_popup"
          />
        </div>
      )}
      {isActive && <LinkingCode namePopup={namePopup} isActive={isActive} />}
    </div>
  );
};
export default AutthorityImUser;
