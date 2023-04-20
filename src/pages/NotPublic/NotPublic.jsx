import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "react-oidc-context";

import Header from "../../components/Header/Header";
import "../../assets/scss/block/not-public.scss";

const NotPublic = () => {
  const Authenticated = localStorage.getItem("Authenticated");
  const auth = useAuth();
  return Authenticated ? (
    <div className="not-public-list">
      <Header />
      <div className="not-public-list__box">
        <div className="not-public-list__content">
          <h4>Sorry!</h4>
          <p>
            This list is not public. <br />
            Return to your{" "}
            <Link to="/" className="not-public-list__link">
              lists
            </Link>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="not-public-list">
      <Header />
      <div className="not-public-list__box">
        <div className="not-public-list__content">
          <h4>Sorry!</h4>
          <p>
            This list is not public. <br />
            You are not an authorized user.
            <br />
            <span
              className="login-btn btn-primary"
              onClick={() => void auth.signinRedirect()}
            >
              Log in
            </span>
            <br />
            Information about us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotPublic;
