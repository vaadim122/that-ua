import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { useAuth } from "react-oidc-context";

import user_ava from "../../assets/images/user_d.jpeg";

const UserAvatar = () => {
  const auth = useAuth();

  const Authenticated = localStorage.getItem("Authenticated");
  const about_me = useSelector(({ profileReducer }) => profileReducer);
  const [isActive, setActive] = useState("false");
  const ref = useRef(null);

  const handleToggle = () => {
    setActive(!isActive);
  };
  const useOutsideClick = (ref, callback) => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        callback();
      }
    };

    useEffect(() => {
      document.addEventListener("click", handleClick);

      return () => {
        document.removeEventListener("click", handleClick);
      };
    });
  };

  useOutsideClick(ref, () => {
    setActive(true);
  });
  const LogoutClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    setTimeout(() => {
      auth.signoutRedirect();
    }, 0);
  };

  return (
    <div className="header__user d-lg-block d-none" ref={ref}>
      <img
        src={about_me?.imageUrl ? about_me?.imageUrl : user_ava}
        alt="user avatar"
        onClick={handleToggle}
      />
      <div className={`header__user__popup ${!isActive ? "popup-open" : ""}`}>
        <p className="p-small margin-15b">{about_me?.name}</p>
        <ul>
          {Authenticated ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <p onClick={LogoutClick}>Log out</p>
              </li>
            </>
          ) : (
            <li>
              <p onClick={() => void auth.signinRedirect()}>Log in</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};
export default UserAvatar;
