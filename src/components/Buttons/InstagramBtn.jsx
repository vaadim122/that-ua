import React from "react";
import InstagramLogin from "react-instagram-oauth";

const InstagramBtn = () => {
  const authHandler = (err, data) => {
    console.log(err, data);
  };

  return (
    <InstagramLogin
      authCallback={authHandler}
      appId="561790475467236"
      appSecret="5f1186c2aa9e8cf3bbc08381a24b1345"
      redirectUri="https://iridescent-semolina-f8f7ae.netlify.app/"
    />
  );
};
export default InstagramBtn;

// 561790475467236
// 5f1186c2aa9e8cf3bbc08381a24b1345
// IGQVJVSm1QOXhEYUFzODFPSHE3Wk9sVkdiOFZAnZA2xzY2x6N1BKZATBmTmppZAjdnQlN6NkN2QXZADWlQ1Uko4eEhxYmhLbVRQV1pjQXpsZAHNQT09FMUUtOGZATRldsMUMzVmtUU3ZA1X2ViYmdJTHdyVTRIYgZDZD
