import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import "../../assets/scss/block/instagram-linke.scss";
import LinkCode from "./LinkCode";

const InstagramLinked = ({ instagramLinked, telegramLinked }) => {
  const [isOpen, setIsOpen] = useState(false);
  const linkCode = useSelector(({ linkingCodeReducer }) => linkingCodeReducer);

  useEffect(() => {
    if (!instagramLinked && !telegramLinked) {
      setIsOpen(true);
    }
  }, [instagramLinked, telegramLinked]);

  const openMod = sessionStorage.getItem("openModal") ? true : false;

  const handleToggle = () => {
    setIsOpen(false);
    sessionStorage.setItem("openModal", true);
  };

  return !openMod && isOpen ? (
    <div className="instagram-linke__wrapper">
      <div className="instagram-linke">
        <div className="instagram-linke--close">
          <span onClick={handleToggle}></span>
        </div>
        <div className="instagram-linke__content">
          <Container className="full-width">
            <Row>
              <Col xs={12} md={3} className="instagram-linke__col">
                <div className="instagram-linke__content--text">
                  <p>
                    Link your instagram
                    <br /> account
                  </p>
                </div>
                <div className="instagram-linke__content--circle">
                  <span></span>
                </div>
              </Col>
              <Col xs={12} md={3} className="instagram-linke__col">
                <div className="instagram-linke__content--circle">
                  <span></span>
                </div>
                <div className="instagram-linke__content--text">
                  <p>
                    Edit your lists,
                    <br />
                    add or remove movies
                  </p>
                </div>
              </Col>
              <Col xs={12} md={3} className="instagram-linke__col">
                <div className="instagram-linke__content--text">
                  <p>Create new lists</p>
                </div>
                <div className="instagram-linke__content--circle">
                  <span></span>
                </div>
              </Col>
              <Col xs={12} md={3} className="instagram-linke__col">
                <div className="instagram-linke__content--circle">
                  <span></span>
                </div>
                <div className="instagram-linke__content--text">
                  <p>
                    Watch trailer or go directly
                    <br />
                    to streamingplatforms
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="instagram-linke__form__wrapper">
          <div className="instagram-linke__form">
            <p>
              Please sent this code to our:
              <br />
              <a
                href="https://www.instagram.com/that_42_bot/"
                target="_blank"
                rel="noreferrer"
              >
                instagram bot
              </a>
              <br />
              <a href="https://t.me/that42" target="_blank" rel="noreferrer">
                telegram bot
              </a>
            </p>
            {linkCode?.code && <LinkCode linkCode={linkCode} />}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default InstagramLinked;
