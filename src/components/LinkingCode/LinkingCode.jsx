import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLinkingCode } from "../../redux/actions/tasks.actions";

const LinkingCode = ({ namePopup, isActive }) => {
  const linkCode = useSelector(({ linkingCodeReducer }) => linkingCodeReducer);
  const dispatch = useDispatch();

  const date = new Date();
  const expirationDate = new Date(linkCode.expirationTimeUtc);
  const MyTime = date.getMinutes() * 60 + date.getSeconds();
  const expirationTime =
    expirationDate.getMinutes() * 60 + expirationDate.getSeconds();
  const timerE = expirationTime - MyTime;

  const [time, setTime] = useState(0);
  const [showCode, setsShowCode] = useState(false);

  const token = localStorage.getItem("MyToken");
  useEffect(() => {
    linkCode?.code && time < 60 && time > 0
      ? setsShowCode(true)
      : setsShowCode(false);
  }, [linkCode?.code, time]);

  useEffect(() => {
    setTime(timerE);
    dispatch(getLinkingCode(token));
  }, [linkCode?.code]);

  useEffect(() => {
    if (time > 0) {
      setTimeout(() => setTime(time - 1), 1000);
    } else {
      dispatch(getLinkingCode(token));
    }
  }, [linkCode?.code, time]);

  return (
    <div className={`header-insta-link__form ${isActive ? "popup-open" : ""}`}>
      <div>
        <p>
          Please sent this code to our {namePopup} bot: {""}
          {namePopup === "instagram" ? (
            <a
              href="https://www.instagram.com/that_42_bot/"
              target="_blank"
              rel="noreferrer"
            >
              @that_42_bot
            </a>
          ) : (
            <a href="https://t.me/that42" target="_blank" rel="noreferrer">
              @that_42_bot
            </a>
          )}
        </p>
      </div>
      {showCode ? (
        <>
          <div>
            <p className="header-insta-link__form--timer">
              {time > 0 ? time : ""}
            </p>
          </div>
          <div>
            <p className="header-insta-link__form--code">{linkCode?.code}</p>
          </div>
        </>
      ) : null}
    </div>
  );
};
export default LinkingCode;
