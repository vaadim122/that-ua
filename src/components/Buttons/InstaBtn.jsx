import { useEffect, useState } from "react";
import axios from "axios";
import InstagramBasicDisplayApi from "instagram-basic-display";
import { useLocation } from "react-router-dom";

const config = {
  redirect_url: "https://iridescent-semolina-f8f7ae.netlify.app/",
  id: "561790475467236",
  secret: "5f1186c2aa9e8cf3bbc08381a24b1345",
};

export default function InstaBtn() {
  const location = useLocation();
  const [code, setCode] = useState("");
  const data = {
    client_id: config.id,
    client_secret: config.secret,
    grant_type: "authorization_code",
    redirect_uri: config.redirect_url,
    code,
  };

  const handleAccessInstagram = async () => {
    const ig = new InstagramBasicDisplayApi({
      appId: "561790475467236",
      redirectUri: config.redirect_url,
    });
    const newWindow = window.open(ig._authorizationUrl, "blank");

    // newWindow.close();
    // if (newWindow.location && newWindow.location.split("?code=")[1]) {
    //   setCode(newWindow.location.split("?code=")[1]);
    // }
  };
  const handleGet = async () => {
    const res = await axios.post(
      "https://api.instagram.com/oauth/access_token",
      data
    );
    console.log(res);
  };
  const getMedia = async () => {
    const res = await axios.get(
      "https://graph.instagram.com/me/media?fields=id,media_type,media_url&limit=1000&access_token=IGQVJXS2lNTkowRW5SZAVhMcVl6cFAtLTZAxd0l3dFRGZAjF0XzlOUTN2V21JMlhseUttSHYxQXBEZAndWM1ZAya0ZAwMWxLMUVHTVcybWI2azI3OVJsOE1jNU8ySWNfaEg1R1dNOVdwbFVncXlWZAHRKNzBkbVpFaDU0SFg1eHFV"
    );
    console.log(res?.data);
  };
  const authHandler = (err, data) => {
    console.log(err, data);
  };
  console.log(window.location.href);
  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    <div className="App">
      <button onClick={() => handleAccessInstagram()}>
        Continue with instagram
      </button>
      <button onClick={() => handleGet()}>Get from instagram</button>
      <button onClick={() => getMedia()}>Get Media</button>
    </div>
  );
}
