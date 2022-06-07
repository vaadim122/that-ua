import React from "react";
import ReactDOM from "react-dom";
import { UserManager } from "oidc-client";

const LogiBtn = () => {
  const onLogin = () => {
    const settings = {
      authority:
        "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      clientId: "47c9fad1-7d20-4220-8ff3-091e1278dd2d",
      redirectUri: "http://localhost:3000/top-list",
    };

    const userManager = new UserManager(settings);
    userManager
      .signinPopup()
      .then((data) => {
        console.log("data:", data);
      })
      .catch((e) => {
        console.log("err:", e);
      });
    console.log("userManager:", userManager);
  };
  return (
    <div className="App">
      <button onClick={onLogin}>Login</button>
    </div>
  );
};
export default LogiBtn;
