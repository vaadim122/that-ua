import { REACT_APP_AUTHORITY_URL, REACT_APP_CLIENT_ID } from "../config";

const configuration = {
  authority: REACT_APP_AUTHORITY_URL,
  client_id: REACT_APP_CLIENT_ID,
  redirect_uri: window.location.origin + "/callback",
  scope: "list_api:use",
};

export default configuration;
