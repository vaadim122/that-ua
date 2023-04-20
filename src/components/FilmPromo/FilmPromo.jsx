import React, { useEffect, useState } from "react";

import axios from "axios";
import { REACT_APP_LIST_API } from "../../config";

import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/scss/block/film-promo.scss";

import TopInfo from "../TopInfo/TopInfo";
import AvailabilityBtnGroup from "../AvailabilityBtnGroup/AvailabilityBtnGroup";
import AddWBtn from "../Buttons/AddWBtn";
import AddWPublicBtn from "../Buttons/AddWPublicBtn";

import poster from "../../assets/images/default_poster.png";
import useAnalyticsEventTracker from "../../hook/useAnalyticsEventTracker";
import { Rating } from "./Rating";

const FilmPromo = ({ publickList, content, name_list, id_list, film_id }) => {
  const name = name_list;
  const list_id = id_list;
  const id = film_id;
  const availabilitySourcesLimit = 2;
  localStorage.setItem("list", list_id);
  const [rating, setRating] = useState(0);
  const [rates, setRates] = useState([]);
  const Authenticated = localStorage.getItem("Authenticated");
  const token = localStorage.getItem("MyToken");

  const gaEventTracker = useAnalyticsEventTracker("Film");

  useEffect(() => {
    let cleanupFunction = false;
    const getRating = async () => {
      try {
        const res = await axios(
          `${REACT_APP_LIST_API}/ratings/${content?.id}?$expand=rates`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = res.data;
        if (!cleanupFunction) {
          data?.rates && setRates(data?.rates);
          data?.avgRate && setRating(data?.avgRate);
        }
      } catch (e) {
        console.error(e.message);
      }
    };
    content?.id && getRating();
    return () => (cleanupFunction = true);
  }, [content?.id, rating]);

  return (
    <Col xs={12} md={6}>
      <div className="content-item padding-15t padding-10b">
        <div className="content-item__box ">
          <Col xs={5} className="content-item__img">
            <Link
              to={`/list/${list_id}/film/${content?.id ? content.id : "#"}`}
              className="content-item__img__link"
              onClick={() => gaEventTracker(content?.title)}
              aria-label="poster image"
            >
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
            </Link>
          </Col>
          <Col xs={7} className="content-item__content">
            <TopInfo
              content={content}
              name={name}
              film_id={id}
              list_id={list_id}
              publickList={publickList}
            />
            {content?.availabilityData ? (
              <div className="d-none d-md-inline-block">
                <AvailabilityBtnGroup
                  content={content}
                  maxNumberOfResults={availabilitySourcesLimit}
                />
              </div>
            ) : (
              ""
            )}
            <p className="content-item__content--text  padding-5t padding-md-20t">
              {content?.plot ? content?.plot : "no content available yet"}
            </p>
            {Authenticated && content?.id && (
              <div className="content-item__bottom content-item__bottom--list padding-5t padding-sm-20t">
                <Rating
                  contentId={content?.id}
                  rating={rating}
                  setRating={setRating}
                  rates={rates}
                  setRates={setRates}
                />
                {!publickList ? (
                  <AddWBtn list_id={list_id} film_id={id} />
                ) : (
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
export default FilmPromo;
