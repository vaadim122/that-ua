import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getLinkingCode } from "../../redux/actions/tasks.actions";


const LinkCode = ({linkCode}) => {
    const dispatch = useDispatch();

  const date = new Date();
  const expirationDate = new Date(linkCode.expirationTimeUtc);
  const MyTime = date.getMinutes() * 60 + date.getSeconds();
  const expirationTime =
    expirationDate.getMinutes() * 60 + expirationDate.getSeconds();
  const timerE = expirationTime - MyTime;

  const [time, setTime] = useState(0);

  const token = localStorage.getItem("MyToken");
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
    <>
      <div>
        <p className="instagram-linke__form--timer">{time > 0 ? time : ""}</p>
      </div>
      <div>
        <p className="instagram-linke__form--code">{linkCode?.code}</p>
      </div>
    </>
  );
};

export default LinkCode;
