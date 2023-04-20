import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";

import AvailabilityBtnGroup from "../AvailabilityBtnGroup/AvailabilityBtnGroup";
import DeleteBtn from "../Buttons/DeleteBtn";
import AddWBtn from "../Buttons/AddWBtn";

import "../../assets/scss/block/film-promo.scss";
import rating from "../../assets/images/rage.png";
import back_arrow from "../../assets/images/back_arrow.svg";
import AddWPublicBtn from "../Buttons/AddWPublicBtn";

const FilmContent = ({ films, publickList }) => {
  const { id } = useParams();
  const [content, setContent] = useState();
  const [list, setList] = useState();
  const [idFilm, setIdFilm] = useState();

  const Authenticated = localStorage.getItem("Authenticated");

  useEffect(() => {
    if (films.length) fetchFilm();
  }, [films]);

  const fetchFilm = () => {
    const data = films.find((el) => {
      return el?.contentId === id;
    });
    setList(data.list);
    setIdFilm(data.id);
    setContent(data.content);
  };
  return (
    <Row className="padding-md-15t padding-0t padding-15b content-item content-item__top-film">
      <Col xs={12} className="content-item__top d-none d-md-inline-block">
        <div className="content-item__breadcrumbs padding-15t">
          <span>
            <Link to={`/list/${list?.id}`}>{list?.name}</Link>
          </span>
          /<span>{content?.title}</span>
        </div>
        <div className="content-item__info padding-15t padding-15b">
          <p className="h3">{content?.title}</p>
          {content?.type ? (
            <div className="content-item__type">
              <span className="p"> {content?.type}</span>
            </div>
          ) : null}
          <div className="p f-category">
            {content?.genres?.map((el, i) => (
              <span key={i}>
                {el}
                <span className="f-category__dots">·</span>
              </span>
            ))}
          </div>
          <span className="p f-hour"> {content?.runtimeMinutes}min</span>
          {content?.imdbRating ? (
            <span className="f-rating">
              <img src={rating} alt="rating" width="30" height="16" />{" "}
              {content?.imdbRating}
            </span>
          ) : (
            ""
          )}
          {!publickList ? (
            <DeleteBtn list_id={list?.id} film_id={idFilm} detailPaga={true} />
          ) : (
            ""
          )}
        </div>
      </Col>

      <Col xs={12} className="content-item__top d-md-none d-inline-block">
        <div className="content-item__breadcrumbs--mobille padding-15t">
          <span>
            <Link to={`/list/${list?.id}`}>
              <img src={back_arrow} alt="move" />
            </Link>
          </span>
        </div>
      </Col>
      {content?.trailer ? (
        <Col xs={12} className="content-item__img">
          <ReactPlayer
            url={content?.trailer}
            className="react-player"
            width="100%"
            height="600px"
            controls={true}
            config={{
              youtube: {
                playerVars: { showinfo: 0 },
              },
            }}
          />
        </Col>
      ) : null}

      <Col
        xs={12}
        className="content-item__info padding-15t d-md-none d-inline-block"
      >
        <div className="d-flex align-items-start">
          <p className="h3">{content?.title}</p>
          {!publickList ? (
            <DeleteBtn list_id={list?.id} film_id={idFilm} detailPaga={true} />
          ) : (
            ""
          )}
        </div>
        {content?.type ? (
          <div className="content-item__type">
            <span className="p"> {content?.type}</span>
          </div>
        ) : null}
        <div className="p f-category">
          {content?.genres?.map((el, i) => (
            <span key={i}>
              {el}
              <span className="f-category__dots">·</span>
            </span>
          ))}
        </div>
        <span className="p f-hour"> {content?.runtimeMinutes}hv</span>
        {content?.imdbRating ? (
          <span className="f-rating">
            <img src={rating} alt="rating" /> {content?.imdbRating}
          </span>
        ) : (
          ""
        )}
      </Col>

      <Col xs={12} className="d-md-none d-inline-block">
        <div className="content-item__bottom padding-20t">
          {content?.availabilityData ? (
            <AvailabilityBtnGroup content={content} />
          ) : (
            ""
          )}
        </div>
      </Col>

      <Col
        xs={12}
        className="content-item__content  padding-md-50t padding-20t"
      >
        <p>{content?.plot}</p>
      </Col>

      <Col xs={12} className="content-item__content">
        <div className="content-item__bottom padding-15t padding-15b">
          <div className="d-none d-md-inline-block">
            {content?.availabilityData ? (
              <AvailabilityBtnGroup content={content} />
            ) : (
              ""
            )}
          </div>
          {Authenticated ? (
            !publickList ? (
              <AddWBtn list_id={list?.id} film_id={idFilm} detailPaga={true} />
            ) : (
              <AddWPublicBtn contentId={content?.id} title={content?.title} />
            )
          ) : (
            ""
          )}
        </div>
      </Col>
    </Row>
  );
};
export default FilmContent;
