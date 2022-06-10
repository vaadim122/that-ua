import React from "react";
import { UserManager } from "oidc-client";

const LogiBtn = () => {
  const onLogin = () => {
    const settings = {
      authority:
        "https://identity-test.that42.com/.well-known/openid-configuration",
      clientId: "6ade8b8b-0720-4ade-86e6-78b11d1e2049",
      redirectUri: "https://iridescent-semolina-f8f7ae.netlify.app/",
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
