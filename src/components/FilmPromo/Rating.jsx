import { useEffect, useState } from "react";

import axios from "axios";
import _ from "lodash";
import { REACT_APP_LIST_API } from "../../config";
import btn_star from "../../assets/images/star_b.svg";

import "../../assets/scss/block/film-rating.scss";
import { Star } from "./StarUI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StarComponent } from "./StarComponent";
import { defaultRates } from "../../store/mockData";

export const Rating = ({
  contentId,
  rating,
  setRating,
  setBtn,
  isRecomendation,
  rates,
  setRates,
}) => {
  const [arrRating, setArrRating] = useState();
  const [hover, setHover] = useState(0);
  const [showRating, setShowRating] = useState(false);
  const [thankPopup, setThankPopup] = useState(false);
  const [localRating, setLocalRating] = useState(0);
  // const [rates, setRates] = useState(arrRating);
  const token = localStorage.getItem("MyToken");

  const showRatingPopup = () => {
    setLocalRating(rating);
    setHover(0);
    setShowRating(true);
    if (rates.length > 0) {
      setArrRating(rates);
    } else {
      setArrRating(defaultRates);
    }
  };
  const hideRatingPopup = () => {
    setShowRating(false);
  };

  const addRating = () => {
    setRating(localRating);
    setRates(arrRating);
    axios.post(
      `${REACT_APP_LIST_API}/ratings`,
      {
        id: contentId,
        avgRate: localRating,
        rates: arrRating,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    isRecomendation && setBtn("Next");
    setShowRating(false);
    setThankPopup(true);
    setTimeout(() => setThankPopup(false), 3000);
    toast.success("Thank you for rating the film!", {
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  return (
    <div className="film-rating">
      <div className="film-rating__btn">
        <div onClick={showRatingPopup}>
          <span className="my-rating">{rating}</span>
          <img src={btn_star} alt="add to wishlist" width="31" height="31" />
        </div>
      </div>
      {showRating && (
        <div className="film-rating__popup">
          <div className="film-rating__popup__content">
            <div className="film-rating__popup__close">
              <span onClick={hideRatingPopup}></span>
            </div>
            <div className="film-rating__overall">
              <div className="film-rating__overall__my-rating">
                {localRating}
              </div>
              <h3>Overall rate</h3>
              <div className="film-rating__overall--stars">
                {[...Array(10)].map((star, index) => {
                  index += 1;
                  return (
                    <button
                      type="button"
                      key={index}
                      className={index <= (hover || rating) ? "on" : "off"}
                      onClick={() => setLocalRating(index)}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(localRating)}
                    >
                      <span className="star">
                        <Star />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="film-rating__rating-lists">
              <h4>Expanded rate</h4>
              <ul>
                {arrRating.map((category, i) => {
                  return (
                    <li key={i}>
                      <StarComponent
                        category={category}
                        setRates={setArrRating}
                        rates={arrRating}
                      />
                    </li>
                  );
                })}
                <li></li>
              </ul>
            </div>
            <div className="film-rating__rate-btn">
              <button
                className={`
                  ${
                    (localRating < 1 ||
                      (localRating === rating &&
                        (_.isEqual(rates, arrRating) ||
                          _.isEqual(arrRating, defaultRates)))) &&
                    "btn-disabled"
                  }`}
                onClick={addRating}
              >
                Rate
              </button>
            </div>
          </div>
        </div>
      )}
      {thankPopup && <ToastContainer />}
    </div>
  );
};
