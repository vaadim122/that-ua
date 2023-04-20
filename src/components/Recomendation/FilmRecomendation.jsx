import React, { useEffect, useState } from "react";
import Moment from "moment";

import axios from "axios";
import { REACT_APP_LIST_API } from "../../config";

import { Col } from "react-bootstrap";
import "../../assets/scss/block/film-promo.scss";

import AvailabilityBtnGroup from "../AvailabilityBtnGroup/AvailabilityBtnGroup";
import AddWPublicBtn from "../Buttons/AddWPublicBtn";

import poster from "../../assets/images/default_poster.png";
import rating_icon from "../../assets/images/rage.png";
import { Rating } from "../FilmPromo/Rating";

const FilmRecomendation = ({ content, source, setBtn }) => {
  const Authenticated = localStorage.getItem("Authenticated");
  const token = localStorage.getItem("MyToken");
  const [rating, setRating] = useState(0);
  const [rates, setRates] = useState([]);

  const availabilitySourcesLimit = 2;

  useEffect(() => {
    if (Authenticated && content.id) {
      axios
        .get(`${REACT_APP_LIST_API}/ratings/${content?.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(({ data }) => {
          data?.rates && setRates(data?.rates);
          data?.avgRate && setRating(data?.avgRate);
        });
      setRating(0);
    }
  }, [Authenticated, content?.id]);

  return (
    <Col xs={12}>
      <div className="content-item padding-15t padding-15b padding-sm-25b padding-sm-25t">
        <div className="content-item__box ">
          <Col xs={5} className="content-item__img">
            <div className="content-item__img__link">
              <div
                className="content-item__img--img"
                style={{
                  backgroundImage: `url(${
                    content?.imageThumbnail
                      ? content.imageThumbnail
                      : content?.image
                      ? content.image
                      : poster
                  })`,
                }}
              ></div>
            </div>
          </Col>
          <Col xs={7} className="content-item__content">
            <div className="content-item__top">
              <div className="content-item__heading">
                <p className="h3">
                  {content?.title ? content?.title : content?.name}
                </p>
                {content?.releaseDate && (
                  <p>({Moment(content?.releaseDate).format("YYYY")})</p>
                )}
              </div>

              <div className="content-item__info padding-10t padding-sm-15t padding-20b">
                {content?.runtimeMinutes > 0 && (
                  <span className="p f-hour">{content?.runtimeMinutes}min</span>
                )}
                {content?.imdbRating && (
                  <span className="f-rating">
                    <img
                      src={rating_icon}
                      alt="rating"
                      width="30"
                      height="16"
                    />{" "}
                    {content?.imdbRating}
                  </span>
                )}
                {content?.type && (
                  <div className="content-item__type">
                    <span className="p"> {content?.type}</span>
                  </div>
                )}
                <div className="p f-category">
                  {content?.genres &&
                    content?.genres?.map((el, i) => (
                      <span key={i}>
                        {el}
                        <span className="f-category__dots">·</span>
                      </span>
                    ))}
                </div>
              </div>
            </div>
            {content?.availabilityData && (
              <div className="d-none d-md-inline-block">
                <AvailabilityBtnGroup
                  content={content}
                  maxNumberOfResults={availabilitySourcesLimit}
                />
              </div>
            )}
            <p className="content-item__content--text  padding-5t padding-md-20t">
              {content?.plot ? content?.plot : "no content available yet"}
            </p>
            {Authenticated && (
              <div className="content-item__bottom content-item__bottom--list padding-5t padding-sm-20t">
                <Rating
                  contentId={content?.id}
                  rating={rating}
                  setRating={setRating}
                  setBtn={setBtn}
                  isRecomendation={true}
                  rates={rates}
                  setRates={setRates}
                />
                {source !== "own" && (
                  <AddWPublicBtn
                    contentId={content?.id}
                    title={content?.title}
                  />
                )}
              </div>
            )}
          </Col>
        </div>
      </div>
    </Col>
  );
};
export default FilmRecomendation;
