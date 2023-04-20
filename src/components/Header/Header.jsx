import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import { useAuth } from "react-oidc-context";

import "../../assets/scss/block/header.scss";
import logo from "../../assets/images/logo_new.png";
import search from "../../assets/images/search.svg";
import bot_icon from "../../assets/images/bot.png";
import unstored from "../../assets/images/Unsorted.png";
import my_list from "../../assets/images/my_lists.png";
import add_wishlist from "../../assets/images/add_wishlist.svg";
import AutthorityImUser from "./AutthorityImUser";
import AddFilm from "./AddFilm";
import UserAvatar from "./UserAvatar";
import RecomendationPopup from "../Recomendation/RecomendationPopup";

const Header = ({ list_id }) => {
  const auth = useAuth();

  const [isActive, setActive] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [new_list, setNewList] = useState();

  const Authenticated = localStorage.getItem("Authenticated");

  const ref = useRef(null);

  const handleOpenSearch = () => {
    setActive(!isActive);
  };
  const handleToggle = () => {
    isOpen
      ? setTimeout(() => {
          setOpen(!isOpen);
        }, 300)
      : setOpen(!isOpen);
  };

  const lists = useSelector(({ listReducer }) => listReducer);
  const about_me = useSelector(({ profileReducer }) => profileReducer);

  useEffect(() => {
    if (lists) {
      setNewList(
        lists?.filter((obj) => {
          return obj.type === "Content";
        })
      );
    }
  }, [lists]);

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
    if (isOpen) {
      document.getElementById("mobile-button-open").click();
    }
  });

  const useMenuClick = () => {
    if (isOpen) {
      document.getElementById("mobile-button-open").click();
    }
  };

  // const changeList = () => {
  //   if (isOpen) {
  //     document.getElementById("mobile-button-open").click();
  //   }
  //   dispatch(clearState());
  // };

  const LogoutClick = () => {
    localStorage.clear();
    sessionStorage.clear();
    setTimeout(() => {
      auth.signoutRedirect();
    }, 0);
  };

  const title = (
    <span>
      <img
        src={my_list}
        className="header__icon-menu"
        width="16"
        height="16"
        alt="my list"
      />
      Lists of movies
    </span>
  );
  return (
    <header className="header">
      <Navbar expand="lg">
        <div className={`background-mb-opc ${isOpen ? "open" : ""}`}></div>
        <Container fluid ref={ref}>
          <Link
            to="/"
            className="d-lg-block d-none navbar-brand"
            onClick={useMenuClick}
          >
            <img
              src={logo}
              width="92"
              height="40"
              className="d-inline-block align-top logo-img"
              alt="logo"
            />
          </Link>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            id="mobile-button-open"
            onClick={handleToggle}
          />
          <Navbar.Collapse id="navbarScroll">
            <div className="navbar-mobile-st">
              <Link to="/" className="d-lg-none d-block navbar-brand">
                <img
                  src={logo}
                  width="60"
                  height="27"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </Link>
              <Nav
                className="m-auto my-2 my-lg-0 header__menu"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                {Authenticated ? (
                  <>
                    <NavDropdown title={title} id="navbarScrollingDropdown">
                      {new_list
                        ? new_list?.map((list, i) => (
                            <Link
                              to={`/list/${list.id}`}
                              key={i}
                              onClick={useMenuClick}
                            >
                              <img
                                src={add_wishlist}
                                width="16"
                                height="16"
                                alt="add to wishlist"
                                className="header__icon-submenu"
                              />
                              {list?.name}
                            </Link>
                          ))
                        : ""}
                    </NavDropdown>
                    <Nav.Link href="/unsorted" onClick={useMenuClick}>
                      <img
                        src={unstored}
                        className="header__icon-menu"
                        alt="unstored"
                        width="16"
                        height="16"
                      />
                      Unsorted
                    </Nav.Link>
                  </>
                ) : (
                  " "
                )}
                <a
                  href="https://www.instagram.com/that_42_bot/"
                  target="_blank"
                  onClick={useMenuClick}
                  className="nav-link"
                  rel="noreferrer"
                >
                  <img
                    src={bot_icon}
                    className="header__icon-menu"
                    alt="bot"
                    width="16"
                    height="14"
                  />
                  Ask the bot
                </a>
              </Nav>
              <div className="header__user-menu d-lg-none d-block">
                <p className="p-small margin-10b">{about_me?.name}</p>
                <ul>
                  {Authenticated ? (
                    <>
                      <li>
                        <p>Profile</p>
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
          </Navbar.Collapse>
          {!isActive && <>{about_me?.id && <RecomendationPopup />}</>}
          <div className="header__right-bar">
            <div className={isActive ? "search-active search" : "search"}>
              <input type="text" className="input" placeholder="Search..." />
              <button className="btn" onClick={handleOpenSearch}>
                <img
                  src={search}
                  width="26"
                  height="26"
                  className="d-inline-block align-top"
                  alt="search"
                />
              </button>
            </div>
            {!isActive && (
              <>
                {about_me?.id ? <AddFilm list_id={list_id} /> : ""}
                {(!about_me?.isInstagramLinked ||
                  !about_me?.isTelegramLinked) &&
                  Authenticated &&
                  about_me?.id && <AutthorityImUser />}
              </>
            )}

            <UserAvatar />
          </div>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
