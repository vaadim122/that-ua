import React, { useEffect } from "react";

import { useAuth } from "react-oidc-context";

import "../../assets/scss/block/forms.scss";

const FormLogin = () => {
  const auth = useAuth();
  localStorage.clear();
  useEffect(() => {
    auth.signinRedirect();
  }, []);

  return <div className="login"></div>;
};
export default FormLogin;
