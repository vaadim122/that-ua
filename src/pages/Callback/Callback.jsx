import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "react-oidc-context";
import FormLogin from "../../components/Form/FormLogin";

const Callback = () => {
  const auth = useAuth();

  window.localStorage.setItem("Authenticated", auth?.isAuthenticated);
  window.localStorage.setItem("MyToken", auth?.user?.access_token);
  const Authenticated = localStorage.getItem("Authenticated");
  const redirect_url = sessionStorage.getItem("redirect_url");

  return Authenticated ? <Navigate to={`${redirect_url}`} /> : <FormLogin />;
};
export default Callback;
