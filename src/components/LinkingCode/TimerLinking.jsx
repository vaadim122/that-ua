import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const TimerLinking = () => {
  const linkCode = useSelector(({ linkingCodeReducer }) => linkingCodeReducer);

  const date = new Date();
  const expirationDate = new Date(linkCode.expirationTimeUtc);
  const MyTime = date.getMinutes() * 60 + date.getSeconds();
  const expirationTime =
    expirationDate.getMinutes() * 60 + expirationDate.getSeconds();
  const test = expirationTime - MyTime;

  const [time, setTime] = useState(test);
  useEffect(() => {
    let timer = setInterval(() => {
      setTime((time) => {
        if (time === 0) {
          clearInterval(timer);
          return 0;
        } else return time - 1;
      });
    }, 1000);
    setTime(test);
  }, [linkCode?.code]);

  return <>{time}</>;
};
export default TimerLinking;
